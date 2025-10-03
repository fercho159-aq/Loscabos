import { neon } from '@netlify/neon';

// This will automatically use the NETLIFY_DATABASE_URL environment variable.
const sql = neon();

export default sql;
