import type { CollectionConfig } from "payload";

export const Invitation: CollectionConfig = {
  slug: "invitations",

  admin: {
  useAsTitle: 'title',
  defaultColumns: ['title', 'wedding', 'status', 'createdAt'],

  preview: ({ slug }) => {
    if (!slug) return null

    return `/preview/${slug}`
  },
},

  access: {
    read: ({ req }) => {
      if (!req.user) return false;

      if (req.user.role === "admin") return true;

      return {
        "wedding.owner": {
          equals: req.user.id,
        },
      };
    },

    create: ({ req }) => Boolean(req.user),

    update: ({ req }) => {
      if (!req.user) return false;

      if (req.user.role === "admin") return true;

      return {
        "wedding.owner": {
          equals: req.user.id,
        },
      };
    },

    delete: ({ req }) => {
      if (!req.user) return false;

      if (req.user.role === "admin") return true;

      return {
        "wedding.owner": {
          equals: req.user.id,
        },
      };
    },
  },

  fields: [
    {
      name: "wedding",
      type: "relationship",
      relationTo: "weddings",
      label: "Pernikahan",
      required: true,
      unique: true,
      index: true,
      admin: {
        description: "Pernikahan yang digunakan sebagai sumber data undangan.",
      },
    },

    {
      name: "title",
      type: "text",
      label: "Judul Undangan",
      required: true,
      minLength: 2,
      maxLength: 150,
      admin: {
        description: "Judul yang digunakan untuk mengidentifikasi undangan.",
      },
    },

    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 150,
      index: true,
      admin: {
        description:
          "Identitas unik yang digunakan pada alamat publik undangan.",
      },
    },

    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "draft",
      options: [
        {
          label: "Draf",
          value: "draft",
        },
        {
          label: "Dipublikasikan",
          value: "published",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "content",
      type: "group",
      label: "Konten Undangan",
      fields: [
        {
          name: "headline",
          type: "text",
          label: "Judul Utama",
          required: true,
          minLength: 2,
          maxLength: 150,
          admin: {
            description:
              "Judul utama yang ditampilkan pada bagian konten undangan.",
          },
        },

        {
          name: "greeting",
          type: "textarea",
          label: "Kata Pembuka",
          required: true,
          minLength: 2,
          maxLength: 1000,
          admin: {
            description:
              "Kata pembuka atau pesan yang ingin disampaikan kepada tamu.",
          },
        },

        {
          name: "closing",
          type: "textarea",
          label: "Kata Penutup",
          maxLength: 1000,
          admin: {
            description: "Pesan penutup untuk tamu undangan.",
          },
        },
      ],
    },

    {
      name: "theme",
      type: "group",
      label: "Tema Undangan",
      fields: [
        {
          name: "template",
          type: "select",
          label: "Template",
          required: true,
          defaultValue: "classic",
          options: [
            {
              label: "Classic",
              value: "classic",
            },
            {
              label: "Elegant",
              value: "elegant",
            },
            {
              label: "Minimal",
              value: "minimal",
            },
          ],
          admin: {
            description:
              "Template dasar yang digunakan untuk menampilkan undangan.",
          },
        },

        {
          name: "style",
          type: "group",
          label: "Gaya Tampilan",
          fields: [
            {
              name: "primaryColor",
              type: "text",
              label: "Warna Utama",
              required: true,
              defaultValue: "#1F2937",
              admin: {
                description: "Gunakan format warna HEX, contoh: #1F2937.",
                placeholder: "#1F2937",
              },
            },

            {
              name: "secondaryColor",
              type: "text",
              label: "Warna Sekunder",
              required: true,
              defaultValue: "#F3F4F6",
              admin: {
                description: "Gunakan format warna HEX, contoh: #F3F4F6.",
                placeholder: "#F3F4F6",
              },
            },

            {
              name: "font",
              type: "text",
              label: "Font",
              required: true,
              defaultValue: "Inter",
              maxLength: 100,
              admin: {
                description: "Nama font yang digunakan pada tampilan undangan.",
                placeholder: "Inter",
              },
            },
          ],
        },
      ],
    },

    {
      name: "cover",
      type: "group",
      label: "Sampul Undangan",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Judul Sampul",
          required: true,
          minLength: 2,
          maxLength: 150,
          admin: {
            description: "Judul utama yang ditampilkan pada sampul undangan.",
          },
        },

        {
          name: "subtitle",
          type: "text",
          label: "Subjudul Sampul",
          maxLength: 250,
          admin: {
            description:
              "Teks pendukung yang ditampilkan pada sampul undangan.",
          },
        },
      ],
    },
  ],
};
