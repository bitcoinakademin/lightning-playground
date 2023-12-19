"use client";

import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import Post from "./Post";

export default function BlogPost({ params }) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Post params={params} />
    </Suspense>
  );
}
