import { Router } from 'express'
import { authRequired } from '../middlewares/ValidateToken.js'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/ProductsController.js'
import { validateSchema } from '../middlewares/Validator.js'
import { createProductSchema } from '../schemas/product.schema.js'

const router = Router()
router.get('/products', authRequired, getProducts)
router.get('/product/:id', authRequired, getProductById)
// primero se valida que el usuario este autenticado, despues que los datos enviados sean correctos y si esta todo ok pasa por el controller 
router.post('/products', authRequired, validateSchema(createProductSchema), createProduct)
router.delete('/product/:id', authRequired, deleteProduct)
router.put('/products/:id', authRequired, updateProduct)

export default router