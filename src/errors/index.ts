import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'

export class MyError extends Error {
  statusCode: number

  constructor(message: string, code: number) {
    super(message)
    this.statusCode = code
  }
}

export const errorsHandler: ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (err instanceof MyError)
    return res.status(err.statusCode).send({ message: err.message })

  //unknown errors
  console.log(err)
  return res.status(500).json({ message: 'Algo não parece certo!' })
}
