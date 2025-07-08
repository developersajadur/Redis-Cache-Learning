import { Server } from 'http';
import mongoose from 'mongoose';
import { app } from './app';


const uri = process.env.DATABASE_URL as string;
const port = process.env.PORT || 5000;
let server: Server;

async function main() {
  try {
    await mongoose.connect(uri);
    server = app.listen(port, () => {
      console.log(`App Is Listening On Port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main()