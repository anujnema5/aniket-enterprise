import jwt from 'jsonwebtoken';
import { getAdminById } from '../database/entity.js'
import db from '../../../db/index.js'
import { CustomError, getStatusCodeFromError } from '../responses/api.error.js';
import { BAD_REQUEST_HTTP_CODE, SOMETHING_WENT_WRONG_GENERATING_TOKEN } from '../constants/constants.js';

const generateToken = (data, secret, expiry) => {
    return jwt.sign(data, secret, { expiresIn: expiry });
}

const updateEntityWithRefreshToken = async (entityId, refreshToken) => {
    await db.admin.update({ where: { id: entityId }, data: { refreshToken } });
};

export const generateAccessRefreshToken = async (id) => {
    try {
        const entity = await getAdminById(id)

        if(!entity) {
            throw new CustomError(BAD_REQUEST_HTTP_CODE, SOMETHING_WENT_WRONG_GENERATING_TOKEN)
        }

        const accessToken = generateAccessToken(entity.id);
        const refreshToken = generateRefreshToken(entity.id);

        await updateEntityWithRefreshToken(entity.id, refreshToken)
        return [accessToken, refreshToken];
    }

    catch (error) {
        console.log(error);
        const statusCode = getStatusCodeFromError(error)
        throw new CustomError(statusCode, SOMETHING_WENT_WRONG_GENERATING_TOKEN);
    }
}

const generateAccessToken = (id) => {
    return generateToken(
        { adminId: id },
        process.env.ADMIN_ACCESS_TOKEN_SECRET,
        process.env.ADMIN_ACCESS_TOKEN_EXPIRY
    )
}

const generateRefreshToken = (id) => {
    return generateToken({ adminId: id }, process.env.ADMIN_REFERESH_TOKEN_SECRET, process.env.ADMIN_REFERESH_TOKEN_EXPIRY)
}