"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// get all products
export const getAllProducts = async () => {
  // db connect
  const productCollection = await dbConnect(collections.PRODUCTS);
  const products = await productCollection.find().toArray();
  return products || [];
};

// get single product
export const getSingleProduct = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = {
    _id: new ObjectId(id),
  };
  const productCollection = await dbConnect(collections.PRODUCTS);
  const result = await productCollection.findOne(query);
  return result || {};
};
