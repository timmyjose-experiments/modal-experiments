import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useCallback, useRef } from "react"
import { Pressable, StyleSheet, Text } from "react-native"

export interface SheetItem {
  id: number,
  text: string
  icon: string
  onPress: () => void
}

export interface CustomBottomSheetProps {
  startIndex: number
  snapPoints: string[],
  items: SheetItem[], 
  onClose: () => void
}

const CustomBottomSheet = ({ startIndex, snapPoints, items, onClose }: CustomBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleClose = () => {
    bottomSheetRef.current?.close()
    onClose()
  }

  const handleSheetChanges = useCallback((( index: number) => {
    console.log(`handleSheet changes: ${index}`)
  }), [])

  return (
    <>
      <BottomSheet 
        ref={bottomSheetRef}  
        index={startIndex}
        snapPoints={snapPoints}
        onChange={handleSheetChanges} >
          <Pressable 
            style={styles.closeButton}
            onPress={handleClose}>
            <Text style={styles.closeButtonText}>&#x2715;</Text>
          </Pressable>
          {items.map((item: SheetItem) => (
            <BottomSheetView style={styles.sheet} key={item.id}>
              <Pressable 
                onPress={item.onPress}>
                <Text style={styles.sheetText}>{item.text} {item.icon}</Text>
              </Pressable>
            </BottomSheetView>
          ))}
      </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0c0c0'
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginRight: 20
  },
  closeButtonText: {
    fontSize: 20
  },
  sheet: {
    flex: 1,
    alignItems: 'center'
  },
  sheetText: {
    flex: 1,
    fontSize: 20
  }
})

export default CustomBottomSheet