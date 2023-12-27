import { useRouter } from 'next/router'

import { FormFooter } from '@/components/molecules'
import { SignUpDetails } from '@/components/organisms'
import { LoginLayout } from '@/components/templates'

const RegisterPage = () => {
  const router = useRouter()
  const handleReturnToLogin = () => router.push('/login')
  return (
    <LoginLayout
      subtitle={'Complete your job information'}
      step={2}
      footer={
        <FormFooter
          text="Already have an account?"
          actionText="Login"
          callback={handleReturnToLogin}
        />
      }
    >
      <SignUpDetails />
    </LoginLayout>
  )
}

export default RegisterPage
