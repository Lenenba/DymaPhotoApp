export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
}

export interface Credentails {
  email: string;
  password: string;
}
