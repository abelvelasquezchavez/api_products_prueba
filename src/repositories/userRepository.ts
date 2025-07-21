import { db } from '../config/database';
import { User } from '../models/User';

export const findByEmail = async (email: string) => {
    const [rows]: any = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};

export const createUser = async (user: User) => {
    const [result]: any = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [user.email, user.password]);
    return { id: result.insertId, ...user };
};