import { config } from "dotenv";

config()

const _config = {
    port: process.env.PORT,
    mongodbUrl: process.env.MONGODB_URL
}

export const conf = Object.freeze(_config)