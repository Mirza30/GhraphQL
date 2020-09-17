const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockdetailsSchema = new Schema(
    {
        sNo: {
          type: String,
          required: true  
        },
        productNo: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        description: {
          type: String,
          required: false 
        },
        quantity: {
          type: Number,
          required: true  
        },
        rate: {
          type: Number,
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

module.exports = mongoose.model('StockDetails', stockdetailsSchema);