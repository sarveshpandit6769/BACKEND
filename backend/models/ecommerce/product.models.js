import moongoose from 'mongoose';

const productSchema = new moongoose.Schema({
    name: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    description: { 
        type: dyamnic,
        required: false,
        trim: true
    },
    isActive: { 
        type: Boolean, 
        default: true 
    },
    ProductImage: { 
        type: String
    },
    price: { 
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        default: 0,
        type: Number,
        required: true
    },
    category: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });



export const Product = moongoose.model("Product", productSchema);