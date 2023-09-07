import Product from '../models/product.model.js'

export const getProducts = async (req, res) => {
    // de find voy a traer solo los productos del usuario logueado
    const products = await Product.find({userId: req.user.id})
    res.json(products)
}

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id).populate('userId')

    if(!product) return res.status(404).json({message: 'Prodcuto no encontrado'})
    res.json(product)
}

export const createProduct = async (req, res) => {
    const { title, description, date, price} = req.body

    const newProduct = new Product({
        title,
        description,
        date,
        price,
        userId: req.user.id
    })

    const productSaved = await newProduct.save() 
    res.json(productSaved)

}

export const updateProduct = async (req, res) => {
    // el (new: true) se le agrega para que devuelva el dato actualizado y no el dato viejo
    const product =  Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

    if(!product) return res.status(404).json({message: 'Prodcuto no encontrado'})
    res.json(product)
}

export const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)

    if(!product) return res.status(404).json({message: 'Prodcuto no encontrado'})
    return res.sendStatus(204)
}