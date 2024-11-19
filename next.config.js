/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	output: "default",
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: { unoptimized: true },
};

module.exports = nextConfig;
