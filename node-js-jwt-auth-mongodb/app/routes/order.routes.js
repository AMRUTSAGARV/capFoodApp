const controller = require("../controllers/order.controller");
const { authJwt } = require("../middlewares");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/create-order", authJwt.verifyToken, controller.createOrder);

  app.get("/get-razorpay-key", authJwt.verifyToken, controller.getKey);

  app.post("/pay-order", authJwt.verifyToken, controller.payOrder);

  app.get("/list-orders", authJwt.verifyToken, controller.listOrder);
};
