import type { CollectionConfig } from 'payload'

export const Wedding: CollectionConfig = {
  slug: 'weddings',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'owner', 'status', 'createdAt'],
  },

  access: {
    read: ({ req }) => {
      if (!req.user) return false

      if (req.user.role === 'admin') return true

      return {
        owner: {
          equals: req.user.id,
        },
      }
    },

    create: ({ req }) => Boolean(req.user),

    update: ({ req }) => {
      if (!req.user) return false

      if (req.user.role === 'admin') return true

      return {
        owner: {
          equals: req.user.id,
        },
      }
    },

    delete: ({ req }) => {
      if (!req.user) return false

      if (req.user.role === 'admin') return true

      return {
        owner: {
          equals: req.user.id,
        },
      }
    },
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      minLength: 2,
      maxLength: 150,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 150,
      index: true,
    },

    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
