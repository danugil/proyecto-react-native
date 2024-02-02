import { Pressable, Text, View, StyleSheet, Modal, } from "react-native";

const RemoveModal = ({
  modalVisible,
  setModalVisible,
  cartItems,
  setCartItems,
  itemSelected,
}) => {

  const removeItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false);
  };

  return (
    <Modal transparent={true} animationType='fade' visible={modalVisible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.text1}>
            ¿Quieres eliminar este producto?
          </Text>
          <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.text2}>No, cancelar.</Text>
          </Pressable>
          <Pressable style={styles.modalButton} onPress={removeItem}>
            <Text style={styles.text2}>Sí, eliminarlo.</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    backgroundColor: '#99C1FF',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  text1: {
    fontSize: 18,
    fontWeight: '500',
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
  },
})