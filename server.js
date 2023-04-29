//llamado de librterias
const express = require("express");
const bodyParser = require("body-parser");

const application = express();
application.use(bodyParser.json());
const port = 3000;
//creación de las rutas
const routes = {
  exp: "/example",
  create: "/create",
};

//get
application.get(routes.exp, (req, res) => {
  const responseStruct = {
    status: "ok",
    code: 200,
  };
  res.json(responseStruct);
});

//post
application.post(routes.create, (req, res) => {
  console.log("body es:", req.body);
  try {
    const { numberOne, numberTwo } = req.body;
    if (!numberOne || !numberTwo)
      throw { message: "Faltan Datos", status: 501 };
    const result = numberOne * numberTwo;
    const responsePostStruct = {
      status: "ok",
      result,
    };
    res.json(responsePostStruct);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
//subir el servidor

application.listen(port, () => {
  console.log("app running on port" + port);
});
