import { notFound } from "next/navigation";
import { getPayload } from "payload";

import config from "../../../../../payload.config";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InvitationPreview({ params }: Props) {
  const { slug } = await params;

  const payload = await getPayload({
    config,
  });

  const result = await payload.find({
    collection: "invitations",
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: "published",
          },
        },
      ],
    },
    depth: 2,
    limit: 1,
  });

  const invitation = result.docs[0];

  if (!invitation) {
    notFound();
  }

  const wedding =
    typeof invitation.wedding === "object" ? invitation.wedding : null;

  if (!wedding) {
    notFound();
  }

  const groom = wedding.groom;
  const bride = wedding.bride;
  const profile = wedding.profile;

  const content = invitation.content;
  const cover = invitation.cover;
  const theme = invitation.theme;

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme?.style?.secondaryColor || "#F3F4F6",
        color: theme?.style?.primaryColor || "#1F2937",
      }}
    >
      <div className="fixed left-6 top-6 z-50">
        <Link
          href={`/admin/collections/invitations/${invitation.id}`}
          className="inline-flex items-center rounded-full border border-black/10 bg-white/90 px-5 py-3 text-sm font-medium shadow-sm backdrop-blur transition hover:bg-white"
        >
          ← Kembali ke Edit
        </Link>
      </div>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-70">
          {cover?.subtitle || "Undangan Pernikahan"}
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
          {cover?.title || invitation.title}
        </h1>

        <div className="mt-10">
          <p className="text-lg opacity-70">
            {groom?.name} & {bride?.name}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">{content?.headline}</h2>

        {content?.greeting && (
          <p className="mt-6 whitespace-pre-line leading-8 opacity-80">
            {content.greeting}
          </p>
        )}
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-8">
            <p className="mb-2 text-sm uppercase tracking-widest opacity-60">
              Mempelai Pria
            </p>

            <h3 className="text-2xl font-semibold">{groom?.name}</h3>

            {groom?.nickname && (
              <p className="mt-2 opacity-70">{groom.nickname}</p>
            )}
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-8">
            <p className="mb-2 text-sm uppercase tracking-widest opacity-60">
              Mempelai Wanita
            </p>

            <h3 className="text-2xl font-semibold">{bride?.name}</h3>

            {bride?.nickname && (
              <p className="mt-2 opacity-70">{bride.nickname}</p>
            )}
          </div>
        </div>
      </section>

      {profile?.story && (
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
            Kisah Kami
          </p>

          <p className="whitespace-pre-line leading-8 opacity-80">
            {profile.story}
          </p>
        </section>
      )}

      {wedding.events && wedding.events.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-widest opacity-60">
              Acara Pernikahan
            </p>

            <h2 className="mt-3 text-3xl font-semibold">Waktu & Lokasi</h2>
          </div>

          <div className="space-y-6">
            {wedding.events.map((event) => (
              <article
                key={event.id}
                className="rounded-2xl border border-black/10 bg-white/60 p-8"
              >
                <h3 className="text-2xl font-semibold">{event.name}</h3>

                <p className="mt-4 opacity-70">{event.type}</p>

                <div className="mt-6 space-y-2 opacity-80">
                  <p>
                    {new Date(event.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p>
                    {event.startTime}
                    {event.endTime ? ` — ${event.endTime}` : ""}
                  </p>

                  <p className="mt-4 font-medium">{event.location?.venue}</p>

                  <p className="whitespace-pre-line">
                    {event.location?.address}
                  </p>

                  {event.location?.mapsUrl && (
                    <a
                      href={event.location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block underline"
                    >
                      Lihat Lokasi
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {content?.closing && (
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="whitespace-pre-line leading-8 opacity-80">
            {content.closing}
          </p>
        </section>
      )}
    </main>
  );
}
