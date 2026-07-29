"use server";
import bcrypt from "bcryptjs";
import { collections, dbConnect } from "@/lib/dbConnect";
export async function PostUser(payload) {
  const { name, email, password, confirmpassword } = payload;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const userCollection = await dbConnect(collections.USERS);
  const existUser = await userCollection.findOne({ email });

  if (existUser) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  if (
    !name.trim() ||
    !email.trim() ||
    !password.trim() ||
    !confirmpassword.trim()
  ) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  if (name.trim().length <= 2) {
    return {
      success: false,
      message: "Name must be at least 2 character long",
    };
  }
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email",
    };
  }
  if (password !== confirmpassword) {
    return {
      success: false,
      message: "Password dosen't match",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: hashedPassword,
    role: "user",
  };

  const result = await userCollection.insertOne(newUser);

  if (result.acknowledged) {
    return {
      success: true,
      message: "Registration successful",
      insertedId: result.insertedId.toString(),
    };
  }

  return {
    success: false,
    message: "Failed to create account",
  };
}
