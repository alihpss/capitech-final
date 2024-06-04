import { Request, Response } from 'express';
import {
  AuthRegisterProps,
  AuthReqProps,
} from '../Types/Requests/UserRequests';
import SendResponse from '../utils/SendResponse';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {
  async auth(req: Request<unknown, unknown, AuthReqProps>, res: Response) {
    try {
      const { email, password } = req.body;

      //TODO - USER SERVICE
      const user = await { id: 1234, name: 'Ali', password: '552' };

      if (!user) {
        return SendResponse.error(res, 404, 'Usuário não encontrado');
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return SendResponse.error(res, 400, 'Usuário ou senha incorreta');
      }

      const { password: userPass, ...restUser } = user;

      // TODO - adicionar proccess.env.JWT_SECRET
      const userToken = jwt.sign(restUser, 'a', {
        expiresIn: '1d',
      });

      return SendResponse.success(res, 200, 'Login realizado', userToken);
    } catch (error) {
      console.log('🚀 ~ UserController ~ auth ~ error:', error);
      return SendResponse.error(res, 500, 'Erro ao realizar login');
    }
  }

  async register(
    req: Request<unknown, unknown, AuthRegisterProps>,
    res: Response
  ) {
    try {
      const { adminCode, email, password } = req.body;

      if (!adminCode || !email || !password) {
        return SendResponse.error(
          res,
          404,
          'Campos obrigatórios sem preenchimento'
        );
      }
    } catch (error) {
      console.log('🚀 ~ UserController ~ auth ~ error:', error);
      return SendResponse.error(res, 500, 'Erro ao cadastrar usuário');
    }
  }
}
