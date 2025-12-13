import moongoose from 'mongoose';

const doctorSchema = new moongoose.Schema({
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
    salary: {
        type: Number,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
        trim: true
    },
    experienceInYears: {
        type: Number,
        required: true,
        default: 0,
    },
    worksInHospitals: [
        {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
],
    specialty: [
        {
        type: moongoose.Schema.Types.ObjectId,
        ref: "MedicalSpecialty",
        required: true,
    },
],
}, { timestamps: true });

export const Doctor = moongoose.model("Doctor", doctorSchema);