import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Text Section */}
      <View style={styles.textContainer}>
      <Image source={require=('/assets/images/adoptme.jpg')} style={styles.image} />
        <Text style={styles.title}>Ready to make a new friend?</Text>
        <Text style={styles.subtitle}>
          Let’s adopt the pet which you like and make their life happy again
        </Text>
      </View>
      
      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")} // Navigates to the Login screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginTop:50,
    marginBottom:50,
  },
  textContainer: {
    paddingHorizontal: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ffa500",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
