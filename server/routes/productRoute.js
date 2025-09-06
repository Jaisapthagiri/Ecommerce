import express from 'express';
import authSeller from '../middlewares/authSeller.js';
import { addProduct, changeStock, productById, productList , editProduct , deleteProduct } from '../controllers/productController.js';
import { upload } from '../config/multer.js';

const productRouter = express.Router();

productRouter.post('/add', upload.array('images'), authSeller, addProduct);
productRouter.get('/list', productList);
productRouter.get('/:id', productById);
productRouter.put('/:id', upload.array('images'), authSeller, editProduct);
productRouter.delete('/:id', authSeller, deleteProduct);
productRouter.post('/stock', authSeller, changeStock)

export default productRouter;
