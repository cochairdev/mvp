import { useState } from 'react'

import { FormFooter } from '@/components/molecules'
import {
  LoginForm,
  ResetPasswordForm,
  SignUpForm,
} from '@/components/organisms'
import { LoginLayout } from '@/components/templates'

const EmailLinkAuth = () => {
  const states = {
    SIGN_UP: {
      title: 'Welcome to Cochair',
      subtitle: 'Please enter your email and password',
      footer: (
        <FormFooter
          text="Already have an account?"
          actionText="Login"
          callback={() => {
            setState(states.LOGIN)
          }}
        />
      ),
      step: 1,
      id: 'sign-up',
    },
    LOGIN: {
      title: 'Welcome to Cochair',
      subtitle: 'Complete your personal information',
      footer: (
        <FormFooter
          text="Don’t have an account?"
          actionText="Sign up"
          callback={() => {
            setState(states.SIGN_UP)
          }}
        />
      ),
      id: 'login',
    },
    RESET_PASSWORD: {
      title: 'Reset Password',
      subtitle: 'Please enter your email',
      footer: (
        <FormFooter
          text="Back to"
          actionText="Log in"
          callback={() => {
            setState(states.LOGIN)
          }}
        />
      ),
      id: 'reset-password',
    },
  }
  const [state, setState] = useState(states.LOGIN)

  return (
    <LoginLayout
      title={state.title}
      subtitle={state.subtitle}
      footer={state.footer}
      step={state.step}
    >
      {state.id === 'sign-up' && <SignUpForm />}
      {state.id === 'login' && (
        <LoginForm
          forgotPasswordCallback={() => {
            setState(states.RESET_PASSWORD)
          }}
        />
      )}
      {state.id === 'reset-password' && <ResetPasswordForm />}
    </LoginLayout>
  )
}

export default EmailLinkAuth
