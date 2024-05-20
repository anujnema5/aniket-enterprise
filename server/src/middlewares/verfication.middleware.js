import jwt from 'jsonwebtoken';
import { getAdminById } from '../utils/database/entity.js';

const getToken = (req) => {
    const token = req.header("Authorization")?.replace("Bearer ", "") || req.cookies.accessToken;

    if (!token) {
        throw new CustomError(401, 'Unauthorized request, Token not found')
    }

    const decodedToken = jwt.verify(token, process.env.ADMIN_ACCESS_TOKEN_SECRET);
    return decodedToken
}

export const verifyAdmin = async (req, res, next) => {
    const token = getToken(req)
    const admin = await getAdminById(token.adminId);

    if (!admin) {
        throw new CustomError(403, "Admin not found")
    }

    req.admin = admin;
    next();
}