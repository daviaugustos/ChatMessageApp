import styled from 'styled-components/native'

export const MessageContainer = styled.View`
  padding: 5px;
  background-color: #f4f4f4;
  border-radius: 10px;
  margin-vertical: 5px;
`

export const AvatarContainer = styled.Image`
  height: 25px;
  width: 25px;
  border-radius: 20px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const UsernameText = styled.Text`
  margin-left: 10px;
  color: grey;
  font-weight: 800;
  font-size: 12px;
`

export const MessageText = styled.Text`
  margin-vertical: 5px;
  margin-left: 10px;
  font-size: 14px;
`
