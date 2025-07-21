import { Request, Response } from 'express';
import * as service from '../services/productService';

export const getAll = async (_req: Request, res: Response) => {
    const products = await service.getAll();
    res.json(products);
};

export const getById = async (req: Request, res: Response) => {
    const product = await service.getById(Number(req.params.id));
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
};

export const create = async (req: Request, res: Response) => {
    const product = await service.create(req.body);
    res.status(201).json(product);
};

export const update = async (req: Request, res: Response) => {
    await service.update(Number(req.params.id), req.body);
    res.json({ message: 'Producto actualizado' });
};

export const remove = async (req: Request, res: Response) => {
    await service.remove(Number(req.params.id));
    res.json({ message: 'Producto eliminado' });
};
