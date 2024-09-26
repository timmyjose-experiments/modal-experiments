import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ModalDemo1 from './screens/ModalDemo1'
import ModalDemo2 from './screens/ModalDemo2'
import Home from './screens/Home'

export type RootStackParamList = {
  Home: undefined
  ModalDemo1: undefined
  ModalDemo2: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ModalDemo1' component={ModalDemo1} />
        <Stack.Screen name='ModalDemo2' component={ModalDemo2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App