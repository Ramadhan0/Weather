import { User } from "../../models";

export const getUser = async (email) => {
  return await User.findOne({
    where: {
      email,
    },
  });
};

export const createUser = async (userData) => {
    return await User.create(userData);
};
