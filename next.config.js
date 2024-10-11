/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rmersh-udemy-nextjs-foodie-users-images.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

module.exports = nextConfig
