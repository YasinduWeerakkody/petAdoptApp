import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PetDetailsPage({ navigation, route }) {
  const { pet } = route.params; // Pass pet details from HomePage

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pet.name}</Text>
      <Text>Breed: {pet.breed}</Text>
      <Text>Age: {pet.age}</Text>
      <Text>Address: {pet.address}</Text>
      <Button title="Chat with Owner" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
});
