import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/env";
import { generateToken, verifyToken } from "./jwt";
import httpStatus from "http-status-codes"
import AppError from "../errorHelpers/AppError";
import { BlockedStatus, IUser } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";


export const createUserTokens = (user: Partial<IUser>) => {
    const jwtPayload = {
        userId: user._id,
        email: user.email,
        role: user.role
    }
    const accessToken = generateToken(jwtPayload, envVars.JWT_ACCESS_SECRET, envVars.JWT_ACCESS_EXPIRES);

    const refreshToken = generateToken(jwtPayload, envVars.JWT_REFRESH_SECRET, envVars.JWT_REFRESH_EXPIRES);

    return {
        accessToken,
        refreshToken
    }
}

export const createNewAccessTokenWithRefreshToken = async (refreshToken: string) => {
    const verifiedRefreshToken = verifyToken(refreshToken, envVars.JWT_REFRESH_SECRET) as JwtPayload;

    const isUserExist = await User.findOne({ email: verifiedRefreshToken.email })
    if (!isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "User does not exist.")
    }
    if (isUserExist.blockedStatus === BlockedStatus.BLOCKED) {
        throw new AppError(httpStatus.BAD_REQUEST, `User is ${isUserExist.blockedStatus}`)
    }
    if (isUserExist.driverInfo?.suspended === true) {
        throw new AppError(httpStatus.BAD_REQUEST, "Driver account is suspended.");
    }

    const jwtPayload = {
        userId: isUserExist._id,
        email: isUserExist.email,
        role: isUserExist.role
    }
    const accessToken = generateToken(jwtPayload, envVars.JWT_ACCESS_SECRET, envVars.JWT_ACCESS_EXPIRES);
    return accessToken
} 