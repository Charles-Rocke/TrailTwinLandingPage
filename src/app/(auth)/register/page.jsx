import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { WaitlistForm } from './components/WaitlistForm'

export const metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <AuthLayout
      title="Sign up for an account"
      // subtitle={
      //   <>
      //     Already registered?{' '}
      //     <Link href="/login" className="text-cyan-600">
      //       Sign in
      //     </Link>{' '}
      //     to your account.
      //   </>
      // }
      subtitle={
        <>Sign up to save your spot on the waitlist and we’ll be in touch!</>
      }
    >
      <WaitlistForm />
    </AuthLayout>
  )
}
