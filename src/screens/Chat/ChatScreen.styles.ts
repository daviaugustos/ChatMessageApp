import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: green;
`

export const MessageContainer = styled.ScrollView`
  flex: 9;
  padding-vertical: 30px;
  padding-horizontal: 10px;
  background-color: blue;
`

export const InputContainer = styled.View`
  flex: 1;
  background-color: red;
`
