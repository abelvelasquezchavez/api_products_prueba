import { db } from '../config/database';
import { Product } from '../models/Product';

export const findAll = async (): Promise<Product[]> => {
    const [rows]: any = await db.query('SELECT * FROM products');
    return rows;
};

export const findById = async (id: number): Promise<Product | null> => {
    const [rows]: any = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0] || null;
};

export const create = async (product: Product): Promise<Product> => {
    const [result]: any = await db.query(
        'INSERT INTO products (name, description, price) VALUES (?, ?, ?)',
        [product.name, product.description, product.price]
    );
    return { id: result.insertId, ...product };
};

export const update = async (id: number, product: Product) => {
    await db.query(
        'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?',
        [product.name, product.description, product.price, id]
    );
};

export const remove = async (id: number) => {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
};
