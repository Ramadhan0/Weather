import jwt from 'jsonwebtoken';

const secretKey = 'secret'; 
const expiresIn = '999y';

export const generateToken = (data) => {
  return jwt.sign(data, secretKey, { expiresIn });
};

export const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
