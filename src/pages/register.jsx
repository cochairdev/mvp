import { useUser } from 'reactfire'
import { Register } from '@/components/organisms'

const RegisterPage = () => {
  const user = useUser()
  const email = user?.data?.email

  return <Register email={email} />
}

export default RegisterPage
