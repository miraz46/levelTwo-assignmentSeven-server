import AppError from "../../errorHelpers/AppError";
import { IUser, Role, } from "./user.interface";
import { User } from "./user.model";
import httpStatus from "http-status-codes"
import bcrypt from "bcryptjs";
import { envVars } from "../../config/env";
import { JwtPayload } from "jsonwebtoken";



const updateUser = async (userId: string, payload: Partial<IUser>, verifiedToken: JwtPayload) => {

    const ifUserExist = await User.findById(userId);
    if (!ifUserExist) {
        throw new AppError(httpStatus.NOT_FOUND, "User Not Found")
    }
    if (payload.role && verifiedToken.role !== Role.ADMIN) {
        throw new AppError(httpStatus.FORBIDDEN, "Only admins can change user roles.");
    }
    if (payload.password) {
        payload.password = await bcrypt.hash(payload.password, Number(envVars.BCRYPT_SALT_ROUND))
    }

    const newUpdatedUser = await User.findByIdAndUpdate(userId, payload, { new: true, runValidators: true });

    return newUpdatedUser

}

const getMe = async (personalEmail: string) => {
    const user = await User.findOne({ email: personalEmail }).select("-password");
    return {
        data: user
    }
};

export const UserServices = {
    updateUser,
    getMe,
}