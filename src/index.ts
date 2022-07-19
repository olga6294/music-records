import app from "./app"
import Database from "better-sqlite3";
import * as process from "process";
//import sqliteConnection from "./db/sqlite.connection";

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running");
});

