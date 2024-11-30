import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text , TouchableOpacity} from "react-native";

export default function AddPetPage({ navigation }) {
  const [petName, setPetName] = useState("");
  const [category, setCategory] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Pet</Text>
      <TextInput
        style={styles.input}
        placeholder="Pet Name"
        value={petName}
        onChangeText={setPetName}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Breed"
        value={breed}
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="About"
        value={about}
        onChangeText={setAbout}
      />
      {/* <Button title="Submit" onPress={handleSubmit} style={styles.button}/> */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        title="Submit"
      >
        <Text style={styles.addButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { padding: 10, borderWidth: 1, marginBottom: 10 },
  addButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold",textAlign:"center" },
  button: {
    backgroundColor: "#ffa500",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
});
