import React, { useState, useCallback } from 'react'

import {
  MessageContainer,
  AvatarContainer,
  TitleContainer,
  UsernameText,
  MessageText,
} from '~/components/MessageBox/MessageBox.styles'

interface MessageBoxProps {
  username: string
  avatarUrl: string
  message: string
}

const MessageBoxComponent: React.FC<MessageBoxProps> = ({
  username,
  avatarUrl,
  message,
}) => {
  const [avatarImage, setAvatarImage] = useState({
    uri: avatarUrl,
  })

  const onImageLoadError = useCallback(() => {
    setAvatarImage({
      uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    })
  }, [])
  return (
    <MessageContainer>
      <TitleContainer>
        <AvatarContainer
          testID={'avatar-image'}
          source={avatarImage}
          onError={() => onImageLoadError()}
        />
        <UsernameText testID={'username'}>{username}:</UsernameText>
      </TitleContainer>
      <MessageText testID={'message-text'}>{message}</MessageText>
    </MessageContainer>
  )
}

export default MessageBoxComponent
