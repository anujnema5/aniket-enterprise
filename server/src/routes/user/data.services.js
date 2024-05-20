import db from '../../../db/index.js';
import { userSchema } from '../../../schema/user.schema.js'
import { BAD_REQUEST_HTTP_CODE, INVALID_INPUT, OK_HTTP_CODE, RECORD_CREATED_SUCCESSFULLY } from '../../utils/constants/constants.js';
import { CustomError } from '../../utils/responses/api.error.js';
import { ApiResponse } from '../../utils/responses/api.response.js';

export const submitService = async (req, res) => {
    console.log('first')
    const userData = req.body
    console.log(userData.body)
    const { success, data, error } = userSchema.safeParse(userData.body);

    console.log(data)

    if (!success) {
        console.log(error)
        throw new CustomError(BAD_REQUEST_HTTP_CODE,
            `${INVALID_INPUT} ${error.errors.map((err) => err.message).join(", ")}`);
    }


    const newUserData = await db.leads.create({ data })
    return res.status(200).json(new ApiResponse(OK_HTTP_CODE, newUserData, RECORD_CREATED_SUCCESSFULLY))
}

export const getAllLeads = async (req, res) => {
    const leads = await db.leads.findMany();
    return res.status(200).json(new ApiResponse(OK_HTTP_CODE, leads))
}