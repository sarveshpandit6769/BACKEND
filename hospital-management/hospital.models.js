import moongoose from 'mongoose';

const hospitalSchema = new moongoose.Schema({
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
    addressLine1: {
        type: String,
        required: true,
        trim: true
    },
    addressLine2: {
        type: String,
        required: false,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    pinCode: {
        type: String,
        required: true,
        trim: true
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: false,
        trim: true,
        unique: true,
    },
    specializedIn: [
        {
            type: moongoose.Schema.Types.ObjectId,
            ref: "MedicalSpecialty",
            required: true,
        },
    ], 
}, { timestamps: true });

export const Hospital = moongoose.model("Hospital", hospitalSchema);