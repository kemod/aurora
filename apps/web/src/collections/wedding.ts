import type { CollectionConfig } from "payload";

export const Wedding: CollectionConfig = {
  slug: "weddings",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "owner", "status", "createdAt"],
  },

  access: {
    read: ({ req }) => {
      if (!req.user) return false;

      if (req.user.role === "admin") return true;

      return {
        owner: {
          equals: req.user.id,
        },
      };
    },

    create: ({ req }) => Boolean(req.user),

    update: ({ req }) => {
      if (!req.user) return false;

      if (req.user.role === "admin") return true;

      return {
        owner: {
          equals: req.user.id,
        },
      };
    },

    delete: ({ req }) => {
      if (!req.user) return false;

      if (req.user.role === "admin") return true;

      return {
        owner: {
          equals: req.user.id,
        },
      };
    },
  },

  fields: [
    {
      name: "name",
      type: "text",
      label: "Nama Pernikahan",
      required: true,
      minLength: 2,
      maxLength: 150,
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
        description: "Digunakan sebagai identitas unik pada alamat pernikahan.",
      },
    },

    {
      name: "owner",
      type: "relationship",
      relationTo: "users",
      label: "Pemilik",
      required: true,
      index: true,
      admin: {
        position: "sidebar",
        description:
          "Pengguna yang memiliki dan mengelola data pernikahan ini.",
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
      name: "groom",
      type: "group",
      label: "Mempelai Pria",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nama Lengkap",
          required: true,
          minLength: 2,
          maxLength: 100,
        },
        {
          name: "nickname",
          type: "text",
          label: "Nama Panggilan",
          maxLength: 50,
        },
      ],
    },

    {
      name: "bride",
      type: "group",
      label: "Mempelai Wanita",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nama Lengkap",
          required: true,
          minLength: 2,
          maxLength: 100,
        },

        {
          name: "nickname",
          type: "text",
          label: "Nama Panggilan",
          maxLength: 50,
        },
      ],
    },

    {
      name: "profile",
      type: "group",
      label: "Profil Pernikahan",
      fields: [
        {
          name: "story",
          type: "textarea",
          label: "Cerita Pernikahan",
          admin: {
            description:
              "Ceritakan kisah pasangan atau perjalanan menuju pernikahan.",
          },
        },
      ],
    },

    {
      name: "events",
      type: "array",
      label: "Acara Pernikahan",
      minRows: 1,
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nama Acara",
          required: true,
          minLength: 2,
          maxLength: 100,
        },

        {
          name: "type",
          type: "select",
          label: "Jenis Acara",
          required: true,
          defaultValue: "lainnya",
          options: [
            {
              label: "Akad",
              value: "akad",
            },
            {
              label: "Resepsi",
              value: "resepsi",
            },
            {
              label: "Lainnya",
              value: "lainnya",
            },
          ],
        },

        {
          name: "date",
          type: "date",
          label: "Tanggal Acara",
          required: true,
          admin: {
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "dd/MM/yyyy",
            },
          },
        },

        {
          name: "startTime",
          type: "text",
          label: "Waktu Mulai",
          required: true,
          admin: {
            placeholder: "08:00",
            description: "Gunakan format 24 jam, contoh: 08:00.",
          },
        },
        {
          name: "endTime",
          type: "text",
          label: "Waktu Selesai",
          admin: {
            placeholder: "10:00",
            description: "Gunakan format 24 jam, contoh: 10:00.",
          },
        },

        {
          name: "location",
          type: "group",
          label: "Lokasi Acara",
          fields: [
            {
              name: "venue",
              type: "text",
              label: "Nama Tempat",
              required: true,
              minLength: 2,
              maxLength: 150,
            },
            {
              name: "address",
              type: "textarea",
              label: "Alamat Lengkap",
              required: true,
              maxLength: 500,
            },
            {
              name: "mapsUrl",
              type: "text",
              label: "Tautan Google Maps",
              admin: {
                description: "Masukkan tautan Google Maps menuju lokasi acara.",
                placeholder: "https://maps.google.com/...",
              },
            },
          ],
        },
      ],
    },
  ],
};
