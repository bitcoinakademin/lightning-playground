"use client";

import {
  CircularProgress,
} from "@mui/material";
import { Suspense } from "react";
import Posts from "./Posts";

export default function Blog() {
  // useEffect(() => {
  //   const getPosts = () => {
  //     Axios({
  //       method: "GET",
  //       url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/posts?_embed&page=${page}`,
  //     })
  //       .then((res) => {
  //         const pages = parseInt(res.headers["x-wp-totalpages"]);
  //         setPages(pages);
  //         setPosts(res.data);
  //         setLoading(false);
  //         window.scrollTo(0, 0);
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //       });
  //   };
  //   getPosts();
  // }, [page]);

  return (
    <Suspense fallback={<CircularProgress />}>
      <Posts />
    </Suspense>
  );
}
