import mongoose from 'mongoose'

// El schema sirve para decirle mongoDb que cuando guarde un User tiene que cumplir con esos tipos y esas validaciones
const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        trim: true 
        // el trim lo que hace es que si llega algun valor con espacios limpia esos espacios y guarda solo el valor
    },
    email: {
        type: String, 
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)