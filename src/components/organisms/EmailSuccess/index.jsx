import { useEffect, useState } from 'react'
import { useAuth } from 'reactfire'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Link, Text } from '@components/atoms'

import * as S from './styles'

import { colors } from '@/theme'

export const EmailSuccess = () => {
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
    const isDevelopment = true
    //TODO: remove the isDevelopment variable and remove the "!isDevelopment &&" from line 50
    const timer = setTimeout(() => {
      !isDevelopment && redirectToAppHome()
    }, 4000)
    const interval = setInterval(() => {
      setRedirectionTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])
  return (
    <S.MainContainer>
      <S.SectionContainers>
        <Image
          src="/icons/emailSuccess.svg"
          alt="Icon that show success process"
          height={52}
          width={52}
        />
        <S.MessageContainer>
          <Text variant="title">Email successfully verified</Text>
          <Text color={colors.grays.info} align="center" variant="info">
            In {redirectionTimeLeft} seconds you will be automatically
            redirected to the platform.
          </Text>
        </S.MessageContainer>
        <S.LinkContainer>
          <Text color={colors.grays.info} variant="info">
            Not redirected?
          </Text>
          <S.StyledLink color={colors.brand.primary} href="/dashboard">Take me to the platform</S.StyledLink>
        </S.LinkContainer>
      </S.SectionContainers>
    </S.MainContainer>
  )
}
