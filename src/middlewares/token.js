// import {auth, provider} from '@lib/firebase/firebaseApp'
import { customInitApp } from '@lib/firebase/firebaseAdminConfig'
import { auth } from 'firebase-admin'

const validateToken = async (req, res, next) => {
  customInitApp()
  const token = await auth().verifyIdToken(
    req.headers.authorization.split(' ')[1],
  )
  if (token) {
    next()
  } else {
    res.status(401).json({
      message: 'User not logged in',
      error: 'User not logged in',
    })
  }
}

export default validateToken
