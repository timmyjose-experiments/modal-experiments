// Using the react-native-bottom-sheet library
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Pressable, Text, View } from 'react-native'
import { RootStackParamList } from '../App'
import { styles } from '../styles'
import { useMemo, useState } from 'react'
import CustomBottomSheet, { SheetItem } from '../components/CustomBottomSheet'

const ModalDemo = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const [launch, setLaunch] = useState<boolean>(false);

  const snapPoints = useMemo(() => ['50%'], [])

  const items: SheetItem[] = [
    {
      id: 1,
      text: 'Option 1',
      icon: '🔗',
      onPress: () => { alert('You pressed Option 1')}
    },
    {
      id: 2,
      text: 'Option 2',
      icon: '📦',
      onPress: () => { alert('You pressed Option 2')}
    },
    {
      id: 3,
      text: 'Option 3',
      icon: '🌿',
      onPress: () => { alert('You pressed Option 3')}
    },
    {
      id: 4,
      text: 'Option 4',
      icon: '🚀',
      onPress: () => { alert('You pressed Option 4')}

    },
    {
      id: 5,
      text: 'Option 5',
      icon: '💰',
      onPress: () => { alert('You pressed Option 5')}
      
    },
    {
      id: 6,
      text: 'Option 6',
      icon: '💸',
      onPress: () => { alert('You pressed Option 6')}
    }
 ]

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => setLaunch(true)}>
        <Text>Launch</Text>
      </Pressable>
      { launch && (
        <CustomBottomSheet 
          startIndex={1} 
          snapPoints={snapPoints}
          items={items}
          onClose={() => setLaunch(false)}/>
       )}
    </View>
  )
}

export default ModalDemo