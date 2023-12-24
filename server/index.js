import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose, { Mongoose } from "mongoose"
import helmet from "helmet"
import  morgan from "morgan"
import bodyParser from "body-parser"
import { clientRoute } from "./routes/client.js"
import { salesRoute } from "./routes/sales.js"
import { managementRoute } from "./routes/management.js"


dotenv.config()
const app =express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/clients",clientRoute)
app.use("/sales",salesRoute)
app.use("/management",managementRoute)

//CONFIGURING THE CONNECTION WITH DATABASE AND PORT

const PORT=process.env.PORT||8000

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{app.listen(PORT,()=>console.log(`Server Port:${PORT}`))}).catch((error)=>console.log(`${error} did not connect`))