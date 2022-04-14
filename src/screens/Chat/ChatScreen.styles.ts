import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IMessage } from '~/@types/entities/MessageEntity'

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const MessageContainer = styled(
  FlatList as new () => FlatList<IMessage>,
).attrs({
  contentContainerStyle: { paddingBottom: 40 },
})`
  flex: 9;
  padding-vertical: 30px;
  padding-horizontal: 10px;
  background-color: #394e72;
`

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
`

export const InputFieldContainer = styled.View`
  flex: 8;
`

export const SendButton = styled.TouchableOpacity`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #1e751f;
`

export const SendButtonText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: white;
`
