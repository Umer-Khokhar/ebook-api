import app from "./src/app.ts";
import { conf } from "./src/config/config.ts";
import { connectDB } from "./src/config/db.ts";

const main = async () => {

    await connectDB()
    const PORT = conf.port || 5000

    app.listen(PORT, () => {
        console.log(`Server listening on the port ${PORT}`)
    })
}

main()