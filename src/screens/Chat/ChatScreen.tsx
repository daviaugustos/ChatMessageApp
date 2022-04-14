import React, { useEffect, useState, useCallback } from 'react'
import {
  Container,
  MessageContainer,
  InputContainer,
} from '~/screens/Chat/ChatScreen.styles'
import MessageBox from '~/components/MessageBox/MessageBox'
import { IMessage } from '~/@types/entities/MessageEntity'
import { getMessages } from '~/services/Message/MessageService'

const mockData: IMessage[] = [
  {
    createdAt: '2022-02-06T18:07:16.565Z',
    avatar: 'https://cdn.fakercloud.com/avatars/jagan123_1289.jpg',
    body: 'consequatur blanditiis explicabo',
    user: 'd3c9eaf2-3b30-4508-8c3f-c33fdef65e0c',
    username: 'Mathias.Wiegand96',
    id: '15',
  },
]

const ChatScreen = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = useCallback(async () => {
    const messagesLoaded = await getMessages()
    setMessages(messagesLoaded)
  }, [])

  return (
    <Container>
      <MessageContainer>
        {messages.map(({ id, username, avatar, body }) => (
          <MessageBox
            key={id}
            username={username}
            avatarUrl={avatar}
            message={body}
          />
        ))}
      </MessageContainer>
      <InputContainer />
    </Container>
  )
}

export default ChatScreen
