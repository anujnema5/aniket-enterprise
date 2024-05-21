import { ADMIN_ALREADY_EXIST, BAD_REQUEST_HTTP_CODE, CONFLICT_HTTP_CODE, COULDNT_FOUND_YOU_ACCOUNT, INCORRECT_PASSWORD, INVALID_INPUT, OK_HTTP_CODE, REFERESH_TOKEN_NOT_FOUND, TOKEN_EXPIRE_OR_USED, TOKEN_REFERESHED, UNAUTHORIZED_HTTP_CODE, USERNAME_OR_EMAIL_REQUIRED } from "../../utils/constants/constants.js";
import { adminInputSchema, adminLoginSchema } from '../../../schema/admin.schema.js'
import { getAdminByEmail, getAdminById, getAdminByPhoneNumber } from '../../utils/database/entity.js'
import bcrypt from 'bcryptjs'
import { ApiResponse } from '../../utils/responses/api.response.js'
import { CustomError } from "../../utils/responses/api.error.js";
import { generateAccessRefreshToken } from '../../utils/tokens/token.utils.js'
import db from "../../../db/index.js";
import {options} from '../../utils/tokens/options.js'
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const signIn =
    async (req, res) => {
        const adminReqBody = req.body;
        const { success, data, error } = adminLoginSchema.safeParse(adminReqBody)

        if (!success) {
            throw new CustomError(BAD_REQUEST_HTTP_CODE,
                `${INVALID_INPUT} ${error.errors.map((err) => err.message).join(", ")}`);
        }

        let admin = null;

        if (data.email) {
            admin = await getAdminByEmail(data.email)
        } else if (data.phoneNumber) {
            admin = await getAdminByPhoneNumber(data.phoneNumber)
        }

        if (!admin) {
            throw new CustomError(BAD_REQUEST_HTTP_CODE, COULDNT_FOUND_YOU_ACCOUNT)
        }

        const isValidPassword = await bcrypt.compare(data.password, admin?.password)

        if (!isValidPassword) {
            throw new CustomError(UNAUTHORIZED_HTTP_CODE, INCORRECT_PASSWORD)
        }

        admin.password = null;
        admin.refreshToken = null;

        const [accessToken, refreshToken] = await generateAccessRefreshToken(admin.id);

        return res.status(200)
            .cookie("accessToken", accessToken)
            .cookie("refreshToken", refreshToken)
            .json(new ApiResponse(200, { admin, accessToken }))
    }

export const signUp =
    async (req, res) => {
        const admin = req.body;
        const { success, error, data } = adminInputSchema.safeParse(admin)

        if (!success) {
            throw new CustomError(BAD_REQUEST_HTTP_CODE, `${INVALID_INPUT} ${error.errors.map((err) => err.message).join(", ")}`);
        }

        // check if any existing admin exist
        const existingAdmin = await db.admin.findFirst({
            where: {
                OR: [
                    { email: admin.email },
                    { username: admin.username },
                ]
            }
        });

        if (existingAdmin) {
            throw new CustomError(CONFLICT_HTTP_CODE, ADMIN_ALREADY_EXIST)
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newAdmin = await db.admin.create({
            data: {
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: hashedPassword,
            }
        })

        newAdmin.password = null
        newAdmin.refreshToken = null

        const [accessToken, refreshToken] = await generateAccessRefreshToken(newAdmin.id);

        return res.status(200)
            .cookie("accessToken", accessToken)
            .cookie("refreshToken", refreshToken)
            .json(new ApiResponse(200, { newAdmin, accessToken }))
    }

export const refreshToken = async (req, res)=> {
    const incomingrefreshToken = req.body.refreshToken || req.cookies.refreshToken

    if (!incomingrefreshToken) {
        throw new CustomError(UNAUTHORIZED_HTTP_CODE, REFERESH_TOKEN_NOT_FOUND)
    }

    const decodedToken = jwt.verify(incomingrefreshToken, (process.env.ADMIN_REFERESH_TOKEN_SECRET))

    if (!decodedToken) {
        throw new CustomError(UNAUTHORIZED_HTTP_CODE, NON_VALID_REFERESH_TOKEN)
    }

    const foundAdmin = await getAdminById(decodedToken.adminId);


    if (foundAdmin?.refreshToken !== incomingrefreshToken) {
        throw new CustomError(UNAUTHORIZED_HTTP_CODE, TOKEN_EXPIRE_OR_USED)
    }

    const [accessToken, refreshToken] = await generateAccessRefreshToken(foundAdmin.id) 


    return res
        .status(OK_HTTP_CODE)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(OK_HTTP_CODE, refreshToken))
}