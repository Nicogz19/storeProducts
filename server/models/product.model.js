import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now(),
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        //Nombre del modelo al que hace referencia
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Product', productSchema)