import { useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import {
  AuthProvider,
  DatabaseProvider,
  FirebaseAppProvider,
  useFirebaseApp,
} from 'reactfire'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useRouter } from 'next/router'

// import { FragmentSnackbar, LinearProgress } from '@components'
// import FragmentLoadingOverlay from '@components/atoms/FragmentLoadingOverlay'
import { SEO } from '@components/atoms/SEO'

import StyledComponentsRegistry from '../lib/styled/registry'

// import { Provider, useDispatch, useSelector } from 'react-redux'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { Container } from '@components/organisms/Login/styles'
// import ErrorLayout from '@components/templates/ErrorLayout'
// import Layout from '@components/templates/Layout'
// import { selectUser, userFetched } from '@slices/userSlice'
// import { getCallbackUrl } from '@utils'

// import store from '../redux/store'

// import { useAppSelector } from '@/redux/hooks'
// import { MessagesProvider, useMessages } from '@/utils/hooks/useMessages'

// const tagManagerArgs = {
//   gtmId: process.env.NEXT_PUBLIC_GOOGLE_GTM ?? '',
// }
const queryClient = new QueryClient()

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const App = ({ Component, pageProps }) => (
  <ErrorBoundary
    fallbackRender={() => (
      <>
        <SEO
          title="An error has occurred"
          description="An error has occurred and the application can't continue. Please try again later, or contact an administrator if the problem persists."
        />
      </>
    )}
  >
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>
          {/* <Provider store={store}> */}
          {/* <MessagesProvider> */}
          {/* <FragmentSnackbar /> */}
          <MainComponent Component={Component} pageProps={pageProps} />
          {/* </MessagesProvider> */}
          {/* </Provider> */}
        </StyledComponentsRegistry>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </FirebaseAppProvider>
  </ErrorBoundary>
)

const Loading = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url, { shallow }) => {
      if (url.includes('benefits')) return
      url !== router.asPath && !shallow && setLoading(true)
    }
    const handleComplete = url => url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.asPath])

  //   return loading && <LinearProgress />
  return loading && <p>Loading...</p>
}

const MainComponent = ({ Component, pageProps }) => {
  //   const { showOverlay, message } = useAppSelector(store => store.app)
  //   const user = useSelector(selectUser)
  //   const dispatch = useDispatch()
  const firebaseApp = useFirebaseApp()
  const database = getDatabase(firebaseApp)
  const auth = getAuth(firebaseApp)

  //   const { addMessage } = useMessages()
  //   useEffect(() => {
  //     message && addMessage(message)
  //   }, [message])

  //   useEffect(() => {
  //     // Skip redirection for QA accounts (E2E tests)
  //     if (WHITELIST_ROUTES.includes(router.pathname)) return

  //     if (status === 'authenticated' && user.email === '') {
  //       dispatch(userFetched(session.user))
  //     } else if (status === 'unauthenticated' && router.pathname !== '/login') {
  //       router.push(
  //         {
  //           pathname: '/login',
  //           query: { callbackUrl: getCallbackUrl(router.asPath) },
  //         },
  //         '/login',
  //       )
  //     }
  //   }, [status, user])

  if (auth.currentUser) {
    return (
      <>
        <AuthProvider sdk={auth}>
          <DatabaseProvider sdk={database}>
            <Loading />
            {/* {showOverlay && <FragmentLoadingOverlay />} */}
            <Component {...pageProps} />
          </DatabaseProvider>
        </AuthProvider>
      </>
    )
  }
  return (
    <>
      <AuthProvider sdk={auth}>
        <DatabaseProvider sdk={database}>
          <Loading />
          <Component {...pageProps} />
        </DatabaseProvider>
      </AuthProvider>
    </>
  )
}

export default App
