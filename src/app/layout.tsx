import React from 'react'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getCurrentUser, type UserRecord } from '@/lib/firebase/firebase-admin'
import { AuthServiceProvider } from '@/service/AuthContext'

import './globals.css'

export const metadata: Metadata = {
  title: 'Auth Harness',
  description: "Artem's latest creation",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const currentUser = await getCurrentUser()
  if (!currentUser) redirect('/sign-in')

  return (
    <AuthServiceProvider user={currentUser ? currentUser.toJSON() as UserRecord : null} >
      <html lang='en'>
        <body className='p-2 h-full'>{children}</body>
      </html>
    </AuthServiceProvider>
  )
}
