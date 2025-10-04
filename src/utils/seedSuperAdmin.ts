import { envVars } from "../config/env"
import bcrypt from "bcryptjs"
import { User } from "../modules/user/user.model";
import { IUser, Role } from "../modules/user/user.interface";


export const seedSuperAdmin = async () => {
    try {
        const isSuperAdminExist = await User.findOne({ email: envVars.SUPER_ADMIN_EMAIL });

        if (isSuperAdminExist) {
            console.log("Super Admin already exist");
            return
        }
        const hashedPassword = await bcrypt.hash(envVars.SUPER_ADMIN_PASSWORD, Number(envVars.BCRYPT_SALT_ROUND));


        const payload: IUser = {
            name: "Miraz Rahman",
            email: envVars.SUPER_ADMIN_EMAIL,
            password: hashedPassword,
            role: Role.ADMIN, // 👈 this line ensures you are created as admin
            title: "Full Stack Developer",  // optional but nice to seed
            bio: "Passionate MERN stack developer building modern web apps.",
            github: "https://github.com/miraz46",
            linkedin: "https://www.linkedin.com/in/miraz-rahman-45164530b",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git"],
        }
        const superAdmin = await User.create(payload);
        console.log("✅ Super Admin Created:", superAdmin);
    } catch (error) {
        console.log("❌ Error creating Super Admin:", error);
    }
}