import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ChatScreen from '~/screens/Chat/ChatScreen'

const App = () => {
  return (
    <SafeAreaProvider>
      <ChatScreen />
    </SafeAreaProvider>
  )
}

export default App
