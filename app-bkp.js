const { log } = require("console");
const { json } = require("express");
const http = require("http");
const { request } = require("https");

http
  .createServer((req, res) => {
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });
    // const persona = {
    //   id: 1,
    //   name: "Carlos",
    // };
    res.write("Holas Mundo ");

    // res.write(JSON.stringify(persona));
    res.end();
  })

  .listen(8080);

console.log("escuchando el puerto 8080");
