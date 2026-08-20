import type { Metadata } from 'next'
import type { ServerFunctionClient } from 'payload'
import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Aurora Admin',
}

const serverFunction: ServerFunctionClient = async function serverFunction(args) {
  'use server'

  const { handleServerFunctions } = await import('@payloadcms/next/layouts')

  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

export default async function PayloadLayout({ children }: Args) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  )
}