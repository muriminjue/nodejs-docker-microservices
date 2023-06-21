const app = require("express")();
const helmet = require("helmet");
const cors = require("cors");
const responseTime = require("response-time");
const winston = require("winston");
const Winston = require("express-winston");
const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = process.env.PORT || 4000;

const proxies = {
  "/serviceA": {
    // protected: true,
    target: "http://localhost:4001/",
    changeOrigin: true,
    pathRewrite: {
      [`^/serviceA`]: "",
    },
  },
  "/serviceB": {
    // protected: true,
    target: "http://localhost:4002/",
    changeOrigin: true,
    pathRewrite: {
      [`^/serviceB`]: "",
    },
  },
};



app.disable("x-powered-by");
app.use(cors());
app.use(helmet());

// app.use("/", (req,res)=>{
//     res.send("Gateway is a go")
// })

Object.keys(proxies).forEach((path) => {
  app.use(path, createProxyMiddleware(proxies[path]));
});

app.listen(PORT, () => {
  console.log("App started on port " + PORT);
});
