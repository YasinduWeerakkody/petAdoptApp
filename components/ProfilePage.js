import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfilePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Profile Image */}
      <Image
        source={{ uri: "/assets/images/userprofile.png" }} // Replace with actual user image
        style={styles.profileImage}
      />

      {/* Username and Email */}
      <Text style={styles.username}>Yasindu</Text>
      <Text style={styles.email}>yasiya@example.com</Text>

      {/* Action Buttons */}
      <TouchableOpacity style={[styles.button, styles.addPostButton]} onPress={() => navigation.navigate("AddPost")}>
        <Text style={styles.buttonText}>Add Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.favoritesButton]} onPress={() => navigation.navigate("Favorites")}>
        <Text style={styles.buttonText}>Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.inboxButton]} onPress={() => navigation.navigate("ChatPage")}>
        <Text style={styles.buttonText}>Inbox</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => alert("Logged Out!")}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#777",
    marginBottom: 30,
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  addPostButton: {
    backgroundColor: "#ffe699",
  },
  favoritesButton: {
    backgroundColor: "#f4c2c2",
  },
  inboxButton: {
    backgroundColor: "#add8e6",
  },
  logoutButton: {
    backgroundColor: "#98fb98",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
