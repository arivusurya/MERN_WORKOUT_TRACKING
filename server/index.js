require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoute = require("./routes/workout");
const cors = require("cors");

const app = express();
// connvert time;
function hettime() {
  const hour = new Date().toLocaleString("us-en", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return hour;
}

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method, hettime());
  next();
});
// router
app.use("/workout", workoutRoute);
// connection
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening");
    });
  })
  .catch((err) => {
    console.log(err);
  });
