import React from 'react'
import { render } from '@testing-library/react-native'

import MessageBox from '~/components/MessageBox/MessageBox'
import { messagesListMock } from '~/mocks/MessagesMock'

const messageMock = messagesListMock[0]

const setup = (messageItem = messageMock) => {
  return render(
    <MessageBox
      key={`${messageItem.user}`}
      username={messageItem.username}
      avatarUrl={messageItem.avatar}
      message={messageItem.body}
    />,
  )
}

describe('MessageBox Component', () => {
  it('should render the user name properly', async () => {
    const { findByTestId } = setup()

    const usernameTextLabel = await findByTestId('username')
    expect(usernameTextLabel.props.children[0]).toStrictEqual(
      messageMock.username,
    )
  })

  it('should render the message properly', async () => {
    const { findByTestId } = setup()

    const messageTextLabel = await findByTestId('message-text')
    expect(messageTextLabel.props.children).toStrictEqual(messageMock.body)
  })

  it('should render the avatar icon properly', async () => {
    const { findByTestId } = setup()

    const imageComponent = await findByTestId('avatar-image')
    expect(imageComponent).toBeDefined()
  })
})
