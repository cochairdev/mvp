import { useUser } from 'reactfire'
import { TextField } from '@mui/material'
import { Login } from '@/components/organisms'

const Register = () => {
  const user = useUser()
  const email = user?.data?.email
  return (
    <form>
      <Login email={email} />
    </form>
  )
}

export default Register
