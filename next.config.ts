import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Set the Turbopack root explicitly to handle directories with spaces. */
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
