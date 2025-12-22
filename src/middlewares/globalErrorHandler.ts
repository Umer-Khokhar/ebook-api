import { type NextFunction, type Request, type Response }  from "express";


const globalErrorHandler = ((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500
    res.status(statusCode).json({
        message: err.message || "Internal server Error",
        status: statusCode,
        stack: process.env.NODE_ENV == "development" ? err.stack : undefined
    })
})

export default globalErrorHandler
