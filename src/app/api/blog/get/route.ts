import { NextRequest, NextResponse } from "next/server";
import { Blog } from "@/models/index";
import { dbConnect } from "@/lib/connectDb";
export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all blogs
    const blogs = await Blog.find({});

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: blogs,
      })
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Failed to fetch blogs.",
      }),
      { status: 500 } // Internal Server Error status code
    );
  }
}