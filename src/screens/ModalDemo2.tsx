// Using the react-native-bottom-sheet library
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Pressable, Text, View } from "react-native"
import { RootStackParamList } from "../App"
import { styles } from "../styles"

const ModalDemo2 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default ModalDemo2