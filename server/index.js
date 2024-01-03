import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

// import clientRoute from "./routes/client.js";
import { salesRoute } from "./routes/sales.js";
import { managementRoute } from "./routes/management.js";
import generalRoute from "./routes/general.js";

// Inserting data into the database
import products from "./models/products.js";
import productStats from "./models/productStats.js";
import { dataProduct, dataProductStat ,dataTransaction,dataOverallStat,dataAffiliateStat} from "./data/data.js";
import clientRoute from "./routes/client.js";
import transaction from "./models/transaction.js";
import overallStat from "./models/overallStat.js";
import affiliateStat from "./models/affiliateStat.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors()); // Simplified CORS configuration
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/client", clientRoute);
app.use("/general", generalRoute);
app.use("/sales", salesRoute);
app.use("/management", managementRoute);

// Configuring the connection with the database and port
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Adding data once
    // products.insertMany(dataProduct);
    // productStats.insertMany(dataProductStat);
    // transaction.insertMany(dataTransaction)
    // overallStat.insertMany(dataOverallStat)
  //  affiliateStat.insertMany(dataAffiliateStat)
  })
  .catch((error) => console.log(`${error} did not connect`));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
