import type { CollectionConfig } from 'payload'

export const User: CollectionConfig = {
  slug: 'users',

  auth: true,

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['email', 'name', 'role', 'createdAt'],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
      access: {
        update: ({ req }) => req.user?.role === 'admin',
      },
    },
  ],
}
