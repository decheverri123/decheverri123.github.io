// next.config.js
import type { NextConfig } from "next";

// const isProduction = process.env.NODE_ENV === 'production';
// const repoName = 'decheverri123.github.io';

const nextConfig: NextConfig = {
    output: 'export',
    // assetPrefix: isProduction ? `/${repoName}/` : '',
    // basePath: "/decheverri123.github.io",

    images: {
        unoptimized: true, // Disable image optimization for GitHub Pages
    },
};

export default nextConfig;