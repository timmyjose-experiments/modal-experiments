import { ReactNode, useState } from 'react'
import { styles as globalStyles } from '../screens/Home'
import { Animated, Modal, StyleSheet, View } from 'react-native'

interface BottomSheetProps {
  children: ReactNode[]
}

const BottomSheet = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true)

  return (
    <Modal
    animationType='fade'
    visible={modalVisible}
    transparent
    onRequestClose={() => {}}>
      <View style={styles.overlay}>
        <Animated.View style={[styles.container, { top: 0 }]}>
        </Animated.View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  ...globalStyles,
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2',
    justifyContent: 'flex-end'
  }
})

export default BottomSheet