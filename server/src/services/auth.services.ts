import UserModel from '../models/user.model';

export type CreateAccountParams = {
  email: string;
  password: string;
  userAgent?: string;
};

const createAccount = async (data: CreateAccountParams) => {
  // verify existing user doesnt exist
  const existingUser = await UserModel.exists({ email: data.email });

  if (existingUser) {
    throw new Error('User already exists');
  }

  // create user
  const user = await UserModel.create({
    email: data.email,
    password: data.password,
  });
  // create varification code
  // send verification email
  // create session
  // sign access token
  // return user
};
