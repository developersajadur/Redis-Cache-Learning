# Redis Product Cache API

An Express.js + TypeScript API that fetches product data from MongoDB and caches the result using [ioredis](https://www.npmjs.com/package/ioredis) for improved performance.  
Ideal for learning Redis caching, API optimization, and working with Mongoose models.

---

## 🚀 Features

- Fetches product data using Mongoose
- Redis caching with automatic fallback
- TypeScript, Express, and ioredis integration
- JSON response optimization
- Cache expires every 30 seconds

---

## 📦 Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- Redis (via ioredis)

---

## 📂 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/developersajadur/Redis-Cache-Learning
cd Redis-Cache-Learning
```

2. Install Dependencies
```bash
npm install
```
3. Create .env File
```bash
PORT=5000
DATABASE_URL=your-mongodb-uri
```

5. Install & Run Redis
✅ Option 1: Download Redis for Windows
Download the Redis-x64-3.2.100.zip or similar

Extract it and run redis-server.exe
(You can add it to PATH or run from CMD directly)

✅ Option 2: Use Docker (Recommended)
```bash
docker run --name redis-server -p 6379:6379 -d redis
```
6. Run the Project
 ```bash
npm run dev
```
🛠 Development Scripts
Script	Description
npm run dev	Start app in dev mode
npm run build	Compile TypeScript
npm start	Run compiled app

🔗 Useful Links
📘 ioredis NPM: https://www.npmjs.com/package/ioredis

🧱 Redis for Windows: https://github.com/microsoftarchive/redis/releases

📦 Redis Docker Image: https://hub.docker.com/_/redis
