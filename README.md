This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**Via vercel**
Only applicable if you have access to the vercel project.

If you're on windows make sure to lowercase the RCV project name.

```bash
# Install vercel globally
yarn global add vercel
# Install project packages
yarn install
# Link to the vercel societclub/rcv project
vercel link
# Run vercel with the environment variables via vercel or pull them and run manually
vercel dev
or
vercel env pull
yarn run dev
```

**Via yarn**

TODO: create instructions on how to run without needing a firestore account (using the test environment)

Copy `.env.example` to `.env` then fill the firestore credentials from your own google account

```bash
yarn dev
# or
npm run dev
```

**Development instructions**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

**Deployment**

For testing, every PR will create a vercel preview deployment which you can use to test your changes.

For production deployment, simply get your PR merged into the main branch.

## Learn More about Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
