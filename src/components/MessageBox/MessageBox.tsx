import React, { useState, useCallback } from 'react'

import {
  MessageContainer,
  AvatarContainer,
  TitleContainer,
  UsernameText,
  MessageText,
  ImageContainer,
  ImageData,
} from '~/components/MessageBox/MessageBox.styles'

interface MessageBoxProps {
  username: string
  avatarUrl: string
  message: string
  image?: string
}

const MessageBoxComponent: React.FC<MessageBoxProps> = ({
  username,
  avatarUrl,
  message,
  image,
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
      {message && <MessageText testID={'message-text'}>{message}</MessageText>}
      {image !== '' && (
        <ImageContainer>
          <ImageData
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
            }}
          />
        </ImageContainer>
      )}
    </MessageContainer>
  )
}

export default MessageBoxComponent
