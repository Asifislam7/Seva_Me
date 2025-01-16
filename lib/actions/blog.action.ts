"use server";

import { ID } from "node-appwrite";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
} from "../appwrite.config";
import { parseStringify } from "../utils";


interface CreateBlogParams {
    fullname: string;
    title: string;
    category: string;
    blogcontent: string;
  }

  export const createBlog = async (blog: CreateBlogParams) => {
    console.log("creating new blog post...");
    try {
      const newBlog = await databases.createDocument(
         process.env.NEXT_PUBLIC_DATABASE_ID!,
         process.env.NEXT_PUBLIC_BLOG_COLLECTION_ID!,
        ID.unique(),
        {
          fullname: blog.fullname,
          title: blog.title,
          category: blog.category,
          blogcontent: blog.blogcontent,
        }
      );
      return newBlog;
    } catch (error: any) {
      console.error("Error creating blog post:", error);
      throw error;
    }
  };