import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axiosInstance from "../components/axios/axiosConfig"; // Import the configured Axios instance
import AsyncStorage from "@react-native-async-storage/async-storage"; // For storing the JWT token locally

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    // Validate Email (simple regex check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.length === 0) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address!";
      isValid = false;
    }

    // Validate Password (not empty)
    if (password.length === 0) {
      newErrors.password = "Password is required!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    // Perform form validation before sending the login request
    if (!validateForm()) {
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axiosInstance.post("/Auth/Login", {
        email,
        password,
      });

      // Handle successful login
      if (response.status === 200) {
        const { token, username } = response.data;

        // Store the token in AsyncStorage for subsequent requests
        await AsyncStorage.setItem("token", token);

        Alert.alert("Welcome", `Hello ${username}!`);
        navigation.navigate("Home"); // Redirect to home page
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        Alert.alert("Error", error.response.data.message || "Invalid username or password.");
      } else {
        Alert.alert("Error", "Unable to connect to the server.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput
        style={[styles.input, errors.email ? styles.inputError : null]}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <TextInput
        style={[styles.input, errors.password ? styles.inputError : null]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ffa500",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerLink: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#ffa500",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
