const fs = require("fs");
const jsonServer = require("json-server");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
const path = require("path");

const server = jsonServer.create();
server.use(jsonServer.bodyParser);

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(cors());

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// проверяем, авторизован ли пользователь
// server.use((req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ message: "AUTH ERROR1" });
//   }
//
//   next();
// });

server.use(jsonServer.defaults());

// Эндпоинт для логина
server.post("/login", (req, res) => {
  const { username, password } = req.body;

  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"),
  );

  const { users } = db;

  const userFromBd = users.find(
    (user) => user.username === username && user.password === password,
  );

  console.log(userFromBd);

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: "AUTH ERROR2" });
});

server.use(router);

server.listen(8080, () => {
  console.log("server is running on 8080 port");
});
