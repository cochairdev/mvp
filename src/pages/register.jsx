import { useUser } from 'reactfire'
import { LoginLayout, SignUpDetails } from '@/components/organisms'

const RegisterPage = () => {
  const user = useUser()
  const email = user?.data?.email

  return (
    <LoginLayout step={2}>
      <SignUpDetails />
      <p>Dont have an account?</p>
    </LoginLayout>
  )
}

export default RegisterPage
