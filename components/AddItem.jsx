import { View, TextInput, Pressable, Text, StyleSheet, } from "react-native";

const AddItem = ({
  handleInputChange,
  cartItems,
  setCartItems,
  inputValue,
  setInputValue,
}) => {
  const addButton = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    }
    setCartItems([...cartItems, newItem])
    setInputValue('')
  };


  return (
    <View style={styles.addSection}>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.input1}
        placeholder='Ingresa un producto'
      />
      <Pressable onPress={addButton} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
}

export default AddItem;

const styles = StyleSheet.create({
  input1: {
    borderColor: '#99C1FF',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderCurve: 'circular',
    borderRadius: 10,
    width: '82%',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  addSection: {
    marginVertical: 20,
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#99C1FF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderCurve: 'circular',
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})