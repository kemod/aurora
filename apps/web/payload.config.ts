import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { Wedding } from './src/collections/wedding'
import { Invitation } from './src/collections/invitation'
import { User } from './src/collections/user'

export default buildConfig({
  admin: {
    user: User.slug,
  },

  collections: [User, Wedding, Invitation],

  db: postgresAdapter({
    pool: {
      connectionString: (() => {
        const url = process.env.DATABASE_URL

        if (!url) {
          throw new Error('DATABASE_URL is missing')
        }

        console.log(
          'DATABASE_URL:',
          url.replace(/:\/\/([^:]+):([^@]+)@/, '://$1:***@'),
        )

        return url
      })(),
    },
  }),

  secret: process.env.PAYLOAD_SECRET || '',
})