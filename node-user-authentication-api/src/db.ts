import { Pool } from "pg";

const connectionString = ''; //ElephantSQL
const db = new Pool({connectionString})
export default db;