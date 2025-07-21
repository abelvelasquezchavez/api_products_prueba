import { Request, Response } from 'express';
import * as authService from '../services/authService';

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await authService.register(email, password);
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        res.json({ token });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const { email, newPassword } = req.body;
        const result = await authService.resetPassword(email, newPassword);
        res.json(result);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

