import { useState, useEffect } from 'react'
import { useAuth } from 'reactfire'
import * as S from './styles'
import { Text, Link } from '@components/atoms'
import Image from 'next/image'
import { colors } from '@/theme'
import { useRouter } from 'next/router'
import axios from 'axios'

export const EmailSuccess = ({ email, sendEmail }) => {
  const router = useRouter()
  const [redirectionTimeLeft, setRedirectionTimeLeft] = useState(5)

  const auth = useAuth()

  const redirectToAppHome = async () => {
    try {
      if (auth?.currentUser?.accessToken) {
        const axiosInstance = axios.create({
          baseURL: 'http://localhost:3000',
          headers: {
            Authorization: `Bearer ${auth?.currentUser?.accessToken}`,
          },
        })
        const userDataResponse = await axiosInstance.post('/api/login', {
          email: auth?.currentUser?.email,
        })
        const userData = userDataResponse.data
        let route = '/register'
        if (userData?.didCompleteRegister && userData?.didCompleteOnboarding) {
          route = '/dashboard'
        }
        if (userData?.didCompleteRegister && !userData?.didCompleteOnboarding) {
          route = '/onboarding'
        }
        return router.push(route)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      redirectToAppHome()
      console.log('will component redirect')
    }, 4000)
    const interval = setInterval(() => {
      setRedirectionTimeLeft(prev => prev - 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])
  return (
    <S.MainContainer>
      <S.SectionContainers>
        <Image src="/icons/emailSuccess.svg" height={52} width={52} />
        <S.MessageContainer>
          <Text variant="title">Email successfully verified</Text>
          <Text color={colors.grays.info} align="center" variant="info">
            In {redirectionTimeLeft} seconds you will be automatically
            redirected to the platform.
          </Text>
        </S.MessageContainer>
        <S.LinkContainer>
          <Text color={colors.grays.text} variant="info">
            Not redirected?
          </Text>
          <Link href="/dashboard">Take me to the platform</Link>
        </S.LinkContainer>
      </S.SectionContainers>
    </S.MainContainer>
  )
}
