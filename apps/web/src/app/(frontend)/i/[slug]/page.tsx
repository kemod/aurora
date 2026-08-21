import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import config from '../../../../../payload.config'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function PublicInvitation({ params }: Props) {
  const { slug } = await params

  const payload = await getPayload({
    config,
  })

  const result = await payload.find({
    collection: 'invitations',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: 'published',
          },
        },
      ],
    },
    depth: 2,
    limit: 1,
  })

  const invitation = result.docs[0]

  if (!invitation) {
    notFound()
  }

  const wedding =
    typeof invitation.wedding === 'object'
      ? invitation.wedding
      : null

  if (!wedding) {
    notFound()
  }

  const groom = wedding.groom
  const bride = wedding.bride
  const profile = wedding.profile
  const content = invitation.content
  const cover = invitation.cover
  const theme = invitation.theme

  const primaryColor =
    theme?.style?.primaryColor || '#1F2937'

  const secondaryColor =
    theme?.style?.secondaryColor || '#F3F4F6'

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: secondaryColor,
        color: primaryColor,
      }}
    >
      {/* Cover */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] opacity-60">
          {cover?.subtitle || 'Undangan Pernikahan'}
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
          {cover?.title || invitation.title}
        </h1>

        <div className="mt-8">
          <p className="text-lg opacity-70">
            {groom?.name} &amp; {bride?.name}
          </p>
        </div>
      </section>

      {/* Greeting */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        {content?.headline && (
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.headline}
          </h2>
        )}

        {content?.greeting && (
          <p className="mt-8 whitespace-pre-line text-base leading-8 opacity-75">
            {content.greeting}
          </p>
        )}
      </section>

      {/* Couple */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] opacity-60">
            Mempelai
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Groom */}
          <article className="rounded-3xl border border-black/10 bg-white/60 p-8 text-center">
            <p className="text-xs uppercase tracking-widest opacity-50">
              Mempelai Pria
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              {groom?.name}
            </h3>

            {groom?.nickname && (
              <p className="mt-2 opacity-60">
                {groom.nickname}
              </p>
            )}
          </article>

          {/* Bride */}
          <article className="rounded-3xl border border-black/10 bg-white/60 p-8 text-center">
            <p className="text-xs uppercase tracking-widest opacity-50">
              Mempelai Wanita
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              {bride?.name}
            </h3>

            {bride?.nickname && (
              <p className="mt-2 opacity-60">
                {bride.nickname}
              </p>
            )}
          </article>
        </div>
      </section>

      {/* Story */}
      {profile?.story && (
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] opacity-60">
            Kisah Kami
          </p>

          <p className="mt-8 whitespace-pre-line text-base leading-8 opacity-75">
            {profile.story}
          </p>
        </section>
      )}

      {/* Events */}
      {wedding.events && wedding.events.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] opacity-60">
              Acara Pernikahan
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Waktu &amp; Lokasi
            </h2>
          </div>

          <div className="space-y-6">
            {wedding.events.map((event) => (
              <article
                key={event.id}
                className="rounded-3xl border border-black/10 bg-white/60 p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {event.name}
                </h3>

                <p className="mt-3 text-sm uppercase tracking-widest opacity-50">
                  {event.type}
                </p>

                <div className="mt-6 space-y-2 text-sm leading-7 opacity-75">
                  <p>
                    {new Date(event.date).toLocaleDateString(
                      'id-ID',
                      {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      },
                    )}
                  </p>

                  <p>
                    {event.startTime}
                    {event.endTime
                      ? ` — ${event.endTime}`
                      : ''}
                  </p>

                  <div className="pt-4">
                    <p className="font-medium opacity-100">
                      {event.location?.venue}
                    </p>

                    <p className="mt-1 whitespace-pre-line">
                      {event.location?.address}
                    </p>
                  </div>

                  {event.location?.mapsUrl && (
                    <a
                      href={event.location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block font-medium underline underline-offset-4"
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

      {/* Closing */}
      {content?.closing && (
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="whitespace-pre-line text-base leading-8 opacity-75">
            {content.closing}
          </p>
        </section>
      )}

      {/* Footer */}
      <footer className="px-6 py-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] opacity-40">
          Aurora
        </p>
      </footer>
    </main>
  )
}