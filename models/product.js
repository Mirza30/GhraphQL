const mongoose = require('mangoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        sNo: {
            type: Number,
            required:true
        },
        productName: {
            type: String,
            required: true
        },
        Category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        ItemDescription: {
            type: String,
            required: false
        },
        unit: {
            type: String,
            required: true
        },
        barCode: {
            type: String,
            required: true
        },
        purchasePrice: {
            type: Number,
            required: true
        },
        unitPrice: {
            type: Number,
            required: true
        },
        stockInHand: {
            type: Number,
            required: true
        },
        stockInStore: {
            type: Number,
            required: true
        },
        supplierCode: {
            type: Schema.Types.ObjectId,
            ref: 'Supplier',
            required: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
          }   
    },
    { timestamps: true }
);

module.exports = mongoose.mmodel('Product', productSchema);