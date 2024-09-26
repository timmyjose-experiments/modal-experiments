// Using vanilla React native with react-native-reanimated and react-native-gesture-handler
import { Pressable, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import BottomSheet from "../components/BottomSheet"
import { styles } from "../styles"

const ModalDemo1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </Pressable>
        <BottomSheet/>
    </View>
  )
}

export default ModalDemo1