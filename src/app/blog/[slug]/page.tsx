// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import fetchBlog from "@/apiHelper/fetchBlog";
// import ServicesDetails from "@/components/ServicesDetails";
// import { IBlogs } from "@/types";
// import BlogDetails from "@/components/BlogDetails";
// import CircularProgress from "@mui/material/CircularProgress";

// const BlogRoute = ({
//   params,
//   searchParams,
// }: {
//   params: { slug: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// }) => {
//   const [data, setData] = useState<IBlogs | null>(null);
//   const [loading, setLoading] = useState(false);  //Blog Loading spinner control
//   const [commentAdded, setCommentAdded] = useState(true);

//   const getData = async () => {
//     setLoading(true)
//     const response = await fetchBlog({ slug: params.slug });
//     setData(response.data?.allBlogs[0]);
//     setCommentAdded(false)
//     setLoading(false)
//   };

//   useEffect(() => {
//     if(commentAdded)
//     getData();
//   }, [commentAdded]);

//   console.log(data, "DATA");

//   if (!data && loading)
//   return (  <div className="flex justify-center items-center min-h-screen w-full">
//   <CircularProgress />
// </div>)

//   if (data)
//     return (
//       <div>
//         <BlogDetails data={data} setCommentAdded={setCommentAdded}/>
//       </div>
//     );
// };

// export default BlogRoute;
