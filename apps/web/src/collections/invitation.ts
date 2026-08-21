import type { CollectionConfig } from 'payload'

export const Invitation: CollectionConfig = {
  slug: 'invitations',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'wedding', 'status', 'createdAt'],
  },

  access: {
    read: ({ req }) => {
      if (!req.user) return false

      if (req.user.role === 'admin') return true

      return {
        'wedding.owner': {
          equals: req.user.id,
        },
      }
    },

    create: ({ req }) => Boolean(req.user),

    update: ({ req }) => {
      if (!req.user) return false

      if (req.user.role === 'admin') return true

      return {
        'wedding.owner': {
          equals: req.user.id,
        },
      }
    },

    delete: ({ req }) => {
      if (!req.user) return false

      if (req.user.role === 'admin') return true

      return {
        'wedding.owner': {
          equals: req.user.id,
        },
      }
    },
  },

  fields: [
    {
      name: 'wedding',
      type: 'relationship',
      relationTo: 'weddings',
      label: 'Pernikahan',
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          'Pernikahan yang digunakan sebagai sumber data undangan.',
      },
    },

    {
      name: 'title',
      type: 'text',
      label: 'Judul Undangan',
      required: true,
      minLength: 2,
      maxLength: 150,
      admin: {
        description: 'Judul yang digunakan untuk mengidentifikasi undangan.',
      },
    },

    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 150,
      index: true,
      admin: {
        description:
          'Identitas unik yang digunakan pada alamat publik undangan.',
      },
    },

    {
      name: 'status',
      type: 'select',
      label: 'Status',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draf',
          value: 'draft',
        },
        {
          label: 'Dipublikasikan',
          value: 'published',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}