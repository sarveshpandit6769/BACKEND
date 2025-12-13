import moongoose from 'mongoose';

const medicalRecordSchema = new moongoose.Schema({
    patient: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true, 
    },
    doctor: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true, 
    },
    diagnosis: {
        type: String,
        required: true,
        trim: true
    },
    treatment: {
        type: String,
        required: true,
        trim: true
    },
    recordDate: {
        type: Date, 
        required: true,
        default: Date.now
    },
    notes: {
        type: String,
        required: false,
        trim: true
    }
}, { timestamps: true });

export const MedicalRecord = moongoose.model("MedicalRecord", medicalRecordSchema);