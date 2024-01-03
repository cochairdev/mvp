import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as yup from 'yup'

import { Button, TextField } from '@components/atoms'

import * as S from './styles'

import { useRequestState } from '@/lib/hooks/useRequestState'

export const ResetPasswordForm = () => {
  const auth = getAuth()
  const { state, setLoading, setData, setError } = useRequestState()
  const router = useRouter()

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  })

  const onSubmit = async () => {
    // read the email field of the form
    const email = formik.values.email

    setLoading(true)

    try {
      // send sign in link
      await sendPasswordResetEmail(auth, email)

      // save email in storage, so we can compare
      // it when the user uses the link from the email
      storeEmailInStorage(email)
      router.push('login/verify')

      // success (turns state.success to "true")
      setData()
    } catch (error) {
      setError(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  })

  {
    /* SUCCESS! */
  }

  return (
    <form className={'w-full'} onSubmit={onSubmit}>
      <div className={'flex flex-col space-y-2'}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          name="email"
          type="email"
          margin={'normal'}
        />

        <S.StyledButtonContainer>
          <Button
            type="submit"
            loading={state.loading}
            variant="contained"
            fullWidth
          >
            {state.loading && <>Sending Email Link...</>}
            {!state.loading && <>Send Email Link</>}
          </Button>
        </S.StyledButtonContainer>
      </div>

      {state.error && <span>Sorry, we encountered an error</span>}
    </form>
  )
}
