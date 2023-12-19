import { useState } from 'react'
import Image from 'next/image'

import { Text } from '@components/atoms'

import * as S from './styles'

import { colors } from '@/theme'

export const EmailVerify = ({ email, sendEmail }) => {
  const [didUserResendEmail, setDidUserResendEmail] = useState(false)
  const handleSendEmail = () => {
    setDidUserResendEmail(true)
    sendEmail()
  }
  return (
    <S.MainContainer>
      <S.SectionContainers>
        <Image src="icons/emailUnread.svg" height={52} width={52} />
        <S.MessageContainer>
          <Text variant="title">Please verify your email</Text>
          <Text color={colors.grays.info} align="center" variant="info">
            You&apos;re almost there! We sent an email to{' '}
            {<S.EmailContainer>{email}</S.EmailContainer>}
          </Text>

          <Text align="center" variant="info">
            Just click on the link in that email to complete your sign up.
          </Text>
        </S.MessageContainer>
        <S.ResendEmailContainer>
          <Text color={colors.grays.text} variant="info">
            Still can&apos;t find the email?
          </Text>
          {!didUserResendEmail && (
            <S.ResendEmailButton onClick={handleSendEmail}>
              <Text color={colors.brand.primary} variant="info">
                Resend Email
              </Text>
            </S.ResendEmailButton>
          )}
          {didUserResendEmail && (
            <Text color={colors.brand.primary} variant="info">
              Email sent!
            </Text>
          )}
        </S.ResendEmailContainer>
      </S.SectionContainers>
    </S.MainContainer>
  )
}
