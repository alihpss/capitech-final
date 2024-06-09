import { Request, Response } from 'express';

import SendResponse from '../utils/SendResponse';
import {
  IdRequestProps,
  TrailCreateAndUpdateProps,
} from '../Types/Requests/ITrailRequests';

export class TrailController {
  async getAll(req: Request, res: Response) {
    try {
      const trails = await {};

      return SendResponse.success(
        res,
        200,
        'Sucesso ao listar trilhas',
        trails
      );
    } catch (error) {
      console.log('🚀 ~ TrailController ~ getAll ~ error:', error);
      return SendResponse.error(res, 500, 'Erro ao listar trilhas');
    }
  }

  async getUnique(
    req: Request<IdRequestProps, unknown, unknown>,
    res: Response
  ) {
    try {
      const { id } = req.params;

      const trail = await {};

      if (!trail) {
        return SendResponse.error(
          res,
          404,
          'Erro ao listar trilha, não encontrada'
        );
      }

      return SendResponse.success(res, 200, 'Sucesso ao listar trilha', trail);
    } catch (error) {
      console.log('🚀 ~ TrailController ~ getUnique ~ error:', error);
      return SendResponse.error(res, 500, 'Erro ao listar trilha');
    }
  }

  async create(
    req: Request<unknown, unknown, TrailCreateAndUpdateProps>,
    res: Response
  ) {
    try {
      const {
        caminho_img,
        descricao,
        descricao_video,
        link,
        nome,
        referencias,
        subtitulo,
        titulo_video,
      } = req.body;

      const trail = await {};

      return SendResponse.success(res, 201, 'Trilha criada', trail);
    } catch (error) {
      console.log('🚀 ~ TrailController ~ create ~ error:', error);
      return SendResponse.error(res, 500, 'Erro criar trilha');
    }
  }

  async update(
    req: Request<IdRequestProps, unknown, TrailCreateAndUpdateProps>,
    res: Response
  ) {
    try {
    } catch (error) {
      console.log('🚀 ~ TrailController ~ update ~ error:', error);
      return SendResponse.error(res, 500, 'Erro ao atualizar trilha');
    }
  }

  async delete(req: Request<IdRequestProps, unknown, unknown>, res: Response) {
    try {
    } catch (error) {
      console.log('🚀 ~ TrailController ~ delete ~ error:', error);
      return SendResponse.error(res, 500, 'Erro ao deleter');
    }
  }
}
