import status from 'http-status'
import response from '../../helpers/response'
import { getUser, createUser } from './user.service'
import { generateToken } from '../../helpers/handleToken'

export const login = async (req, res) => {
  try {

    const { email } = req.body

    if (!email) return response(res, "no email provided", status.BAD_REQUEST)

    const user = await getUser(email)

    if (!user) return response(res, "User with this email not found", status.NOT_FOUND)

    const token = generateToken({ email });
    return response(res, "success", status.OK, {user, token})
  } catch (error) {
    console.error(error)
    return response(res, "Server Error", status.INTERNAL_SERVER_ERROR, error)
  }
}

export const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const userData = {
      name,
      email,
    };

    const user = await getUser(email)

    if (user) return response(res, "User with this already exist", status.BAD_REQUEST)

    //  create User
    const newUser = await createUser(userData);

    const token = generateToken({ email });

    return response(res, "Registered successfully", status.CREATED, { user: newUser, token })
  } catch (error) {
    console.error(error);
    return response(res, "Server Error", status.INTERNAL_SERVER_ERROR, error)
  }
};
