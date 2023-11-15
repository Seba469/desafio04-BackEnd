import { Router } from "express";
import ProductManager from "../classes/productManager.classes.js";
import { emit } from "../socket.js";

const router = Router();

const productManager = new ProductManager

router.get('/', async (req, res) => {
    const data = await productManager.getProducts(req.query.limit)

    res.render('realTimeProducts', { title: 'Vamo y vamo' })
    emit(data)
})

export default router;