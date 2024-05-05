import { Request, Response } from 'express'
import Producto from '../models/producto'
import { json } from 'sequelize'

export const getProducts = async (req: Request, res: Response) =>{
    const listProducts = await Producto.findAll()

    res.json(listProducts)
}

export const getProduct = async (req: Request, res: Response) =>{
    const { id } = req.params;
    const product = await Producto.findByPk(id)

    if(product){
        res.json(product)
    }else{
        res.status(404).json({
            msj: `No existe un producto con el id ${id}`
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) =>{
    const { id } = req.params;
    const product = await Producto.findByPk(id)

    if(product){
        await product.destroy()
        res.json({
            msj: `El producto fue eliminado con exito`
        })
    }else{
        res.status(404).json({
            msj: `No existe un producto con el id ${id}`
        })
    }
}

export const postProduct = async (req: Request, res: Response) =>{
    const { body } = req;
    try {
        await Producto.create(body)

        res.json({
            msj: `El producto fue agregado con exito`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msj: `Upps, ocurrio un error`
        })
    }
}

export const updateProduct = async (req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;
    const product = await Producto.findByPk(id)

    if(product){
        try {
            await product.update(body);
            res.json({
                msj: `El producto fue editado con exito`
            })
        } catch (error) {
            console.log(error);
            res.json({
                msj: `Upps, ocurrio un error`
            })
        }
    }else{
        res.status(404).json({
            msj: `No existe un producto con el id ${id}`
        })
    }
}