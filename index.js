const express = require("express");
const app = express();
const PORT = 8090;

app.use(express.json());

const requestLogger = (req, res, next) => {
  const start = Date.now();
  const { method, url } = req;
  const ip = req.ip || req.connection.remoteAddress;
  const timestamp = new Date().toISOString();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[INFO] [${timestamp}] ${method} ${url} - IP: ${ip} - ${res.statusCode} - ${duration}ms`
    );
  });

  next();
};

const infoLogger = (req, res, next) => {
  console.info(`[INFO] Request received: ${req.method} ${req.originalUrl}`);
  next();
};

app.use(requestLogger);
app.use(infoLogger);

app.get("/", (req, res) => {
  res.send("Hello! Welcome to the Home Page.");
});

app.get("/about", (req, res) => {
  res.send(
    "About: This application demonstrates request logging middleware in Express."
  );
});

app.listen(PORT, (err) => {
  if (err) console.log(err, "Error in listening to Port");
  console.log(`Listening to Port : ${PORT}`);
  console.log("Developer Name: Priya Maity");
});
