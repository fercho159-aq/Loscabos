'use server';
import { neon } from '@neondatabase/serverless';

const connectionString = 'postgresql://neondb_owner:npg_C2tgjwQu8zUm@ep-green-bar-adztcgj1-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require';
const sql = neon(connectionString);

export default sql;
