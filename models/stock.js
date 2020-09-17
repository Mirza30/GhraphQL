const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema(
    {
        sNo: {
          type: String,
          required: true  
        },
        supplier: {
          type: Schema.Types.ObjectId,
          ref: 'Supplier',
          required: true 
        },
        billNo: {
          type: String,
          required: true  
        },
        detail: {
          type: String,
          required: true
        },
        date: {
          type: String,
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

module.export = mongoose.model('Stock', stockSchema);