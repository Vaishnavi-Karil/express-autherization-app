const express = require("express");
const app = express();
const PORT = 8000;
const dbConnect = require("./configs/dbConnect");
const authRouter = require("./routes/authRoutes");
const morgan = require("morgan");

const { notFound, errorHandler } = require("./middlewares/errorHandler");
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/user", authRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, function () {
  console.log(`server is running on http://localhost:${PORT}`);
  dbConnect();
});
