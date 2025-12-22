import createHttpError from "http-errors";
import type { Response, Request, NextFunction } from "express";


const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const error = createHttpError(404, "Route Not found.")
    next(error)
}

export default notFoundHandler