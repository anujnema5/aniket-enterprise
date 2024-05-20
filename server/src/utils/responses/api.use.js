import { CustomError } from "./api.error.js";
import { BAD_REQUEST_HTTP_CODE, MISSING_REQUIRED_FIELDS } from "../constants/constants.js";

export const use = function (fn, { reqBody = false } = {}) {
    return function (req, res, next) {

        if (reqBody) {
            const body = req.body;

            if (!body || Object.keys(body).length === 0) {
                throw new CustomError(BAD_REQUEST_HTTP_CODE, MISSING_REQUIRED_FIELDS);
            }
        }
        return Promise.resolve(fn(req, res, next)).catch(next);
    };
};
