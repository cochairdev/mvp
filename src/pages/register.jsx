import { useUser } from 'reactfire'
import { Login } from '@/components/organisms'

const Register = () => {
  const user = useUser()
  const email = user?.data?.email

  return <Login email={email} />
}

export default Register
