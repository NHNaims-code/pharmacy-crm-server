const mongoose = require("mongoose");


// Adds schema
const addSchema = mongoose.Schema({

    quantity: {
        type: String,
        trim: true,
        required: true
    },
    expire_date: {
        type: String,
        trim: true,
        required: true
    }

}, { timestamps: true });

// Sales schema
const saleSchema = mongoose.Schema({

    quantity: {
        type: String,
        trim: true,
        required: true
    },
    expire_date: {
        type: String,
        trim: true,
        required: true
    }

}, { timestamps: true });

// Returns schema
const returnSchema = mongoose.Schema({

    quantity: {
        type: String,
        trim: true,
        required: true
    },
    expire_date: {
        type: String,
        trim: true,
        required: true
    }

}, { timestamps: true });

/**
 *  Medicine schema
 */
const medicineSchema = mongoose.Schema({

    url_id: {
        type: String,
        trim: true,
        required: true,
        default: '0'
    },
    brand_name: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    dosage_from: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    generic_name: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    strength: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    manufactured_by: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    unit_price: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    pack_size: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    adds: {
        type: [addSchema]
    },
    sales: {
        type: [saleSchema]
    },
    returns: {
        type: [returnSchema]
    },
    quantity: {
        starting: {
            type: String,
            trim: true,
            required: true,
            default: '0'
        },
        stock: {
            type: String,
            trim: true,
            required: true,
            default: '0'
        },
        add: {
            type: String,
            trim: true,
            required: true,
            default: '0'
        },
        sale: {
            type: String,
            trim: true,
            required: true,
            default: '0'
        },

    },
    status: {
        type: String,
        enum: ['active', 'deactive'],
        required: true,
        default: 'active'
    }

},  { timestamps: true })


module.exports = medicineSchema;