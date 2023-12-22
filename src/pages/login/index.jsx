import { useState } from 'react'

import { FormFooter } from '@/components/molecules'
import { LoginForm, SignUpForm } from '@/components/organisms'
import { LoginLayout } from '@/components/templates'

const EmailLinkAuth = () => {
  const [isSignUpn, setIsSignUp] = useState(false)

  const switchForm = () => setIsSignUp(isSignUp => !isSignUp)

  const getFooter = () => {
    if (isSignUpn) {
      return (
        <FormFooter
          text="Already have an account?"
          actionText="Login"
          callback={switchForm}
        />
      )
    } else {
      return (
        <FormFooter
          text="Don’t have an account?"
          actionText="Sign up"
          callback={switchForm}
        />
      )
    }
  }

  return (
    <LoginLayout
      subtitle="Please enter your email and password"
      footer={getFooter()}
<<<<<<< HEAD
      step={1}
=======
      step={isSignUpn ? 1 : false}
>>>>>>> 0638d5a (CMVP-193 (Login): Visual changes on styles)
    >
      {isSignUpn ? <SignUpForm /> : <LoginForm />}
    </LoginLayout>
  )
}

export default EmailLinkAuth
