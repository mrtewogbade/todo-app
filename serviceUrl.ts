//This is where we will have all our base Urls
import dotenv from "dotenv";
dotenv.config();
export const Termii_BASE_URL = process.env.TERMII_BASE_URL;
export const PORT = process.env.PORT;
export const COOKIE_SECRET = process.env.COOKIE_SECRET;
export const AWS_REGION = process.env.AWS_REGION;

export const DB_URI = process.env.DB_URI;
