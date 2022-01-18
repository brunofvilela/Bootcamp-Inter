import { Pool } from "pg";

const connectionString = 'postgres://ndtjomvp:2DxCe7iGnPsxg6dTTGg79O8q2xb9aBlB@motty.db.elephantsql.com/ndtjomvp';
const db = new Pool({connectionString})
export default db;