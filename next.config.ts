import type { NextConfig } from "next";

// Optional: Load env manually if needed
import { config } from 'dotenv';

config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local'
});

console.log("Environment Variables Loaded to application:" , process.env.NODE_ENV);

const nextConfig: NextConfig = {
  basePath: '/chatllm',
  assetPrefix: '/chatllm/',
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    NEXT_PUBLIC_USERNAME: process.env.NEXT_PUBLIC_USERNAME,
    NEXT_PUBLIC_PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  },
};

export default nextConfig;
