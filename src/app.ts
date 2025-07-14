import dotenv from "dotenv";
import express, { Request, Response } from "express";
import Redis from "ioredis";
import { ProductModel } from "./Models/product.model";

dotenv.config();
export const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const redis = new Redis();

app.get("/products", async (req: Request, res: Response) => {
  try {
    const cachedKey = "products:all-products";
    const getProductFromCache = await redis.get(cachedKey);
    if (getProductFromCache) {
      res.status(200).json({
        success: true,
        message: "Get App Product From Redis",
        data: JSON.parse(getProductFromCache),
      });
      return;
    }
    const products = await ProductModel.find();

    await redis.set(cachedKey, JSON.stringify(products), "EX", 30);

    res.status(200).json({
      success: true,
      message: "Get All Product From Database",
      data: products,
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error please try again" });
  }
});
