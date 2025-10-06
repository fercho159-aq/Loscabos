import 'dotenv/config';
import { neon } from '@netlify/neon';

const sql = neon(process.env.DATABASE_URL!);

export default sql;
