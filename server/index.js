const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const clientRoutes = require("./routes/client");
const salesRoutes = require("./routes/sales");
const managmentRoutes = require("./routes/managment");
const generalRoutes = require("./routes/general");
const allData = require("./data/index");
const User = require("./models/User");
const ProductStat = require("./models/ProductStat");
const Product = require("./models/Product");
const Transactions = require("./models/Transactions");
const Overview = require("./models/OverallStats");
const AffiliatStat = require("./models/AffiliateStat");
const { default: mongoDB } = require("./utils/monogDb");

const { mongoDbConnect } = require("./utils/monogDb");

const {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} = allData;

/*   CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

/**-------------------------------- mongo Db---------------- */
mongoDbConnect;

//----------------- for check purpose -----------------

const port = process.env.SERVER_PORT || 9001;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

/* ROUTES */

app.use("/api/v1/client", clientRoutes);
app.use("/api/v1/sales", salesRoutes);
app.use("/api/v1/managment", managmentRoutes);
app.use("/api/v1/general", generalRoutes);
