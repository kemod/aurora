import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

export default buildConfig({
  collections: [],

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),

  secret: process.env.PAYLOAD_SECRET || '',
})