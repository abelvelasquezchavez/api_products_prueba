import * as repo from '../repositories/productRepository';
import { Product } from '../models/Product';

export const getAll = () => repo.findAll();
export const getById = (id: number) => repo.findById(id);
export const create = (product: Product) => repo.create(product);
export const update = (id: number, product: Product) => repo.update(id, product);
export const remove = (id: number) => repo.remove(id);
