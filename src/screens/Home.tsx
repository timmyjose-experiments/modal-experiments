import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { styles } from '../styles'
import { Pressable, Text, View } from 'react-native'

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('ModalDemo')}>
          <Text>Modal Demo</Text>
        </Pressable>
    </View>
  )
}


export default Home