import moongoose from "mongoose";

const categorySchema = new moongoose.Schema({
    name: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    description: { 
        type: String,
        required: false,
        trim: true
    },
}, { timestamps: true });

export const Category = moongoose.model("Category", categorySchema);