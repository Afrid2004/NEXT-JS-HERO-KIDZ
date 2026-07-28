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
  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (id.length != 24) {
    return {};
  }
  const query = {
    _id: new ObjectId(id),
  };
  const productCollection = await dbConnect(collections.PRODUCTS);
  const result = await productCollection.findOne(query);
  return { ...result, _id: result._id.toString() } || {}; //passing as a plain object
};
