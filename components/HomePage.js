import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PetAdopt!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddPet")}
      >
        <Text style={styles.buttonText}>Add New Pet</Text>
      </TouchableOpacity>
      {/* Add category buttons and a list of pets here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  button: { padding: 15, backgroundColor: "orange", borderRadius: 5 },
  buttonText: { color: "#fff", textAlign: "center" },
});
