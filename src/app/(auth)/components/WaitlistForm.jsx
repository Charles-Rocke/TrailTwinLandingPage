// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// ready
'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

export function WaitlistForm() {
  const [state, handleSubmit] = useForm('meojzvjd')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/meojzvjd"
      method="POST"
    >
      <div className="grid grid-cols-2 gap-6">
        <TextField
          id="firstName"
          label="First name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
        />
        <ValidationError
          prefix="firstName"
          field="firstName"
          errors={state.errors}
        />
        <TextField
          id="lastName"
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <ValidationError
          prefix="lastName"
          field="lastName"
          errors={state.errors}
        />
        <TextField
          id="email"
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <ValidationError prefix="email" field="email" errors={state.errors} />
        {/* <TextField
            className="col-span-full"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          /> */}
        <SelectField
          id="referralSource"
          className="col-span-full"
          label="How did you hear about us?"
          name="referralSource"
        >
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Reddit</option>
          <option>Google Search</option>
          <option>Other</option>
        </SelectField>
        <ValidationError
          prefix="referralSource"
          field="referralSource"
          errors={state.errors}
        />
      </div>

      {/* <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
      {/* <button type="submit" disabled={state.submitting}>
        Submit
      </button> */}
      <Button
        type="submit"
        color="green"
        className="mt-8 w-full"
        disabled={state.submitting}
      >
        Sign up
      </Button>
    </form>
  )
}
