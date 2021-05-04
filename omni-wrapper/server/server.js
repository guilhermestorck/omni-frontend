import path from "path";
import morgan from "morgan";
import express from "express";
import indexRouter from "./routes/index/indexRouter.js";

const app = express();

app.use(express.static(path.join(process.cwd(), "./server/public")));

app.use(morgan("tiny"));
app.set("view engine", "ejs");
app.set("views", path.resolve(process.cwd(), "./server/views"));

if (!process.env.MAIN_MFE) {
  process.exitCode = 1;
  throw new Error(
    "The MAIN_MFE env variable is empty. You are trying to run the omni wrapper without specifying the mfe to be run"
  );
}
if (!process.env.IMPORT_MAP_URL) {
  process.exitCode = 1;
  throw new Error(
    "The IMPORT_MAP_URL env variable is empty. You are trying to run the omni wrapper without specifying the import map location"
  );
}

app.get("/", indexRouter);

/* Redirects all unmatched routes to / */
app.use((req, res) => res.redirect("/"));

const port = process.env.PORT || 9000;
app.listen(port);

console.log(`App is hosted at http://localhost:${port}/`);
