import { redirect } from 'next/navigation'

import { isUserAuthenticated } from '@/lib/firebase/firebase-admin'

import 

import SignIn from './sign-in'

export default async function SignInPage() {

  if (await isUserAuthenticated()) redirect('/dashboard')

  return (
    <main className='container'>
      <SignIn />
    </main>
  )
}
