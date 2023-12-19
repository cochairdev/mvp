import { LoginLayout, SignUpDetails } from '@/components/organisms'

const RegisterPage = () => (
  <LoginLayout step={2}>
    <SignUpDetails />
    <p>Dont have an account?</p>
  </LoginLayout>
)

export default RegisterPage
