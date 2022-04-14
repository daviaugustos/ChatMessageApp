import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IMessage } from '~/@types/entities/MessageEntity'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: green;
`

export const MessageContainer = styled(
  FlatList as new () => FlatList<IMessage>,
)`
  flex: 9;
  padding-vertical: 30px;
  padding-horizontal: 10px;
  background-color: blue;
`

export const InputContainer = styled.View`
  flex: 1;
  background-color: red;
`
