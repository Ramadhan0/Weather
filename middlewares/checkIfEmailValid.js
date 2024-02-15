import status from 'http-status'
import response from '../helpers/response'

export const validateEmailMiddleware = (req, res, next) => {
  try {
    const { email } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    const allowedDomains = ['gmail.com'];
    const domain = email.split('@')[1];

    if (!allowedDomains.includes(domain)) {
      return response(res, "Invalid Email", status.BAD_REQUEST, email)
    }
    next();
  } catch (error) {
    console.error(error);
    return response(res, "Server Error", status.INTERNAL_SERVER_ERROR, error)
  }
};
