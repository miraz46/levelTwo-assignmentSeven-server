import mongoose, { Schema } from "mongoose";
import { IBlog } from "./blog.interface";
import slugify from "slugify";


const blogSchema = new Schema<IBlog>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        excerpt: {
            type: String,
            required: true,
            maxlength: 300,
            trim: true,
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
        },
        coverImage: {
            type: String,
            default: "",
            trim: true,
        },
        tags: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

blogSchema.pre("save", async function (next) {
    if (this.isModified("title")) {
        const baseSlug = slugify(this.title, { lower: true, strict: true });
        let slug = baseSlug;
        let count = 1;

        const BlogModel = this.constructor as mongoose.Model<IBlog>;

        while (await BlogModel.exists({ slug })) {
            slug = `${baseSlug}-${count++}`;
        }

        this.slug = slug;
    }
    next();
});



export const Blog = mongoose.model<IBlog>("Blog", blogSchema);