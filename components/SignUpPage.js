import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axiosInstance from "../components/axios/axiosConfig"; // Import the configured Axios instance

export default function SignUpPage({ navigation }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
    };

    // Validate Username (must be <= 30 characters)
    if (formData.username.length === 0) {
      newErrors.username = "Username is required!";
      isValid = false;
    } else if (formData.username.length > 30) {
      newErrors.username = "Username should be less than or equal to 30 characters!";
      isValid = false;
    }

    // Validate Email (simple regex check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (formData.email.length === 0) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address!";
      isValid = false;
    }

    // Validate Password and Confirm Password
    if (formData.password.length === 0) {
      newErrors.password = "Password is required!";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Passwords do not match!";
      newErrors.confirmPassword = "Passwords do not match!";
      isValid = false;
    }

    // Validate Phone Number (must be 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (formData.phoneNumber.length === 0) {
      newErrors.phoneNumber = "Phone Number is required!";
      isValid = false;
    } else if (!phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number should be 10 digits!";
      isValid = false;
    }

    // Validate Address
    if (formData.address.length === 0) {
      newErrors.address = "Address is required!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      const { username, email, password, confirmPassword, phoneNumber, address } = formData;

      try {
        // Send POST request to the backend
        const response = await axiosInstance.post("/Auth/Register", {
          username,
          email,
          password,
          phoneNumber,
          address,
        });

        // Handle successful registration
        if (response.status === 200) {
          Alert.alert("Success", "User registered successfully.");
          navigation.navigate("Login"); // Redirect to login page
        }
      } catch (error) {
        // Handle errors
        if (error.response) {
          Alert.alert("Error", error.response.data.message || "Something went wrong.");
        } else {
          Alert.alert("Error", "Unable to connect to the server.");
        }
      }
    } else {
      Alert.alert("Validation Error", "Please fix the errors in the form.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={[styles.input, errors.username ? styles.inputError : null]}
        placeholder="Username"
        value={formData.username}
        onChangeText={(text) => handleInputChange("username", text)}
      />
      {errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}

      <TextInput
        style={[styles.input, errors.email ? styles.inputError : null]}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <TextInput
        style={[styles.input, errors.password ? styles.inputError : null]}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange("password", text)}
      />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

      <TextInput
        style={[styles.input, errors.confirmPassword ? styles.inputError : null]}
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
      />
      {errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}

      <TextInput
        style={[styles.input, errors.phoneNumber ? styles.inputError : null]}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={formData.phoneNumber}
        onChangeText={(text) => handleInputChange("phoneNumber", text)}
      />
      {errors.phoneNumber ? <Text style={styles.error}>{errors.phoneNumber}</Text> : null}

      <TextInput
        style={[styles.input, errors.address ? styles.inputError : null]}
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => handleInputChange("address", text)}
      />
      {errors.address ? <Text style={styles.error}>{errors.address}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
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
});
