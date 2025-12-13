import moongoose from "mongoose";

const orderItemSchema = new moongoose.Schema({
    productId: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["PENDING", "SHIPPED", "DELIVERED", "CANCELLED"],
        default: "PENDING"
    },
    phonenumber: {
        type: Number,
        required: true,
        trim: true
    }
});

const orderSchema = new moongoose.Schema({
    orderPrice: { 
        type: Number,
        required: true,
        default: 0
    },
    orderItems: {
        type: [orderItemSchema],
    },
    customer: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

export const Order = moongoose.model("Order", orderSchema);

export const OrderItem = moongoose.model("OrderItem", orderItemSchema);