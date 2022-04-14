import React, { useEffect, useState, useCallback } from 'react'
import {
  Container,
  MessageContainer,
  InputContainer,
  SendButton,
  SendButtonText,
  InputFieldContainer,
} from '~/screens/Chat/ChatScreen.styles'
import MessageBox from '~/components/MessageBox/MessageBox'
import InputField from '~/components/InputField/InputField'
import { IMessage } from '~/@types/entities/MessageEntity'
import { getMessages } from '~/services/Message/MessageService'

const ChatScreen = () => {
  const [messages, setMessages] = useState([])
  const [messageText, setMessageText] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = useCallback(async () => {
    const messagesLoaded = await getMessages()
    setMessages(messagesLoaded)
  }, [])

  const sendMessage = useCallback(async () => {
    const newMessage: IMessage = {
      createdAt: '2022-02-06T18:07:16.565Z',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      body: messageText,
      user: 'd3c9eaf2-3b30-4508-8c3f-c33fdef65e0c',
      username: 'You',
      id: Math.random().toString(),
    }
    const updatedMessages = [newMessage, ...messages]

    setMessages(updatedMessages)
    setMessageText('')
  }, [messages, messageText])

  return (
    <Container>
      <MessageContainer
        inverted={true}
        data={messages}
        renderItem={({ item, index }) => (
          <MessageBox
            key={`${item.user}+${index}`}
            username={item.username}
            avatarUrl={item.avatar}
            message={item.body}
          />
        )}
      />
      <InputContainer>
        <InputFieldContainer>
          <InputField
            value={messageText}
            onChangeTextValue={text => setMessageText(text)}
            placeholder={'Type your message'}
          />
        </InputFieldContainer>
        <SendButton onPress={() => sendMessage()}>
          <SendButtonText>SEND</SendButtonText>
        </SendButton>
      </InputContainer>
    </Container>
  )
}

export default ChatScreen
