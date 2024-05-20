import db from "../../../db/index.js"

export const getAdminById = async (id) => {
    return await db.admin.findUnique({where: { id }})
}

export const getAdminByEmail = async (email) => {
    return await db.admin.findUnique({where : {email}})
}

export const getAdminByUsername = () => {

}

export const getAdminByPhoneNumber = async (phoneNumber)=> {
    return await db.admin.findUnique({where : {phoneNumber}})
}