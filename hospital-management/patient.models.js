import moongoose from 'mongoose';

const patientSchema = new moongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
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
    address: {
        type: String,
        required: false,
        trim: true,
    },
    diagonsedWith: {
        type: String,
        required: false,
        trim: true,
    },
    admittedIn: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: false,
    },
}, { timestamps: true });

export const Patient = moongoose.model("Patient", patientSchema);