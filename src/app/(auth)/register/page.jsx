import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

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
        <>Sign up to secure your spot on the waitlist and we’ll be in touch!</>
      }
    >
      <form>
        <div className="grid grid-cols-2 gap-6">
          <TextField
            label="First name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          {/* <TextField
            className="col-span-full"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          /> */}
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            name="referral_source"
          >
            <option>Instagram</option>
            <option>Facebook</option>
            <option>Reddit</option>
            <option>Google Search</option>
            <option>Other</option>
          </SelectField>
        </div>
        <Button type="submit" color="green" className="mt-8 w-full">
          Submit
        </Button>
      </form>
    </AuthLayout>
  )
}
