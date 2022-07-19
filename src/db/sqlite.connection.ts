import Database from "better-sqlite3";
import * as process from "process";

const sqliteConnection = new Database(process.env.DB_URL || "", {});

export default sqliteConnection;