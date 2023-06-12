export const config = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
  },
  app: {
    url: 'http://localhost:3000/'
  },
  db: {
    url: process.env.DATABASE_URL ?? ''
  }
};
