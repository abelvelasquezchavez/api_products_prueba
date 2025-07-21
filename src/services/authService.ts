import { createUser, findByEmail } from '../repositories/userRepository';
import { hashPassword, comparePasswords } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';
import { db } from '../config/database';

export const register = async (email: string, password: string) => {
  //Verify if user exists
  const existingUser = await findByEmail(email);
  if (existingUser) throw new Error('Email ya registrado');

  //Hashed password
  const hashed = await hashPassword(password);
  //Create user
  return await createUser({ email, password: hashed });
};

export const login = async (email: string, password: string) => {
  const user = await findByEmail(email);
  if (!user) throw new Error('Usuario no encontrado');

  const isValid = await comparePasswords(password, user.password);
  if (!isValid) throw new Error('Contraseña incorrecta');

  return generateToken({ id: user.id, email: user.email });
};

export const resetPassword = async (email: string, newPassword: string) => {
  const user = await findByEmail(email);
  if (!user) throw new Error('Usuario no encontrado');

  const hashed = await hashPassword(newPassword);
  await db.query('UPDATE users SET password = ? WHERE email = ?', [hashed, email]);

  return { message: 'Contraseña actualizada correctamente' };
};
