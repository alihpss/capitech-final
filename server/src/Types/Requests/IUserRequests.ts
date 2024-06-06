export interface AuthReqProps {
  email: string;
  password: string;
}

export interface AuthRegisterProps extends AuthReqProps {
  adminCode: string;
  name: string;
}
