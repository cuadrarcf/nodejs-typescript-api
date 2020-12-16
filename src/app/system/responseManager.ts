import { Request, Response, Router } from 'express';

export interface DResponse {
  status: string;
  code: number;
  error: string | null;
  data: object | null | string;
}

export function ErrorManager(e: Error, res: Response, code?: number) {

  if (code){
    res.status(code);
  } else {
    res.status(500);
  }

  const b = {
    status: 'error',
    code: res.statusCode,
    error: e.message,
    data: null
  }

  res.send(b);
}

export function SuccessManager(body: object | string, res: Response, code?: number) {

  if (code){
    res.status(code);
  } else {
    res.status(200);
  }

  const b = {
    status: 'success',
    code: res.statusCode,
    error: null,
    data: body
  }

  res.send(b);
}

