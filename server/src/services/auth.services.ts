export type CreateAccountParams = {
  email: string;
  password: string;
  userAgent?: string;
};

const createAccount = async (data: CreateAccountParams) => {
  // verify existing user doesnt exist
  // create user
  // create varification code
  // send verification email
  // create session
  // sign access token
  // return user
};
