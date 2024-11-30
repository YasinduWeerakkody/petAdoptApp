import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignUpPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To store error message
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address:"",
    };

    // Validate Username (must be <= 30 characters)
    if (username.length === 0) {
      newErrors.username = "Username is required!";
      isValid = false;
    } else if (username.length > 30) {
      newErrors.username = "Username should be less than or equal to 30 characters!";
      isValid = false;
    }

    // Validate Email (simple regex check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.length === 0) {
      newErrors.email = "Email is required!";
      isValid = false;
    }else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address!";
      isValid = false;
    }

    

    // Validate Password and Confirm Password
    if (password.length === 0) {
      newErrors.password = "Password is required!";
      isValid = false;
    }else if (password !== confirmPassword) {
      newErrors.password = "Passwords do not match!";
      newErrors.confirmPassword = "Passwords do not match!";
      isValid = false;
    }

    // Validate Phone Number (must be 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (phoneNumber.length === 0) {
      newErrors.phoneNumber = "Phone Number is required!";
      isValid = false;
    }else if (!phonePattern.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number should be 10 digits!";
      isValid = false;
    }

    // Validate Address
    if (address.length === 0) {
      newErrors.address = "Address is required!";
      isValid = false;
    }


    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      setErrorMessage(""); // Clear error messages
      navigation.navigate("Login"); // Proceed to login screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Username */}
      <TextInput
        style={[styles.input, errors.username ? styles.inputError : null]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      {errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}

      {/* Email */}
      <TextInput
        style={[styles.input, errors.email ? styles.inputError : null]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      {/* Password */}
      <TextInput
        style={[styles.input, errors.password ? styles.inputError : null]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

      {/* Confirm Password */}
      <TextInput
        style={[styles.input, errors.confirmPassword ? styles.inputError : null]}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}

      {/* Phone Number */}
      <TextInput
        style={[styles.input, errors.phoneNumber ? styles.inputError : null]}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      {errors.phoneNumber ? <Text style={styles.error}>{errors.phoneNumber}</Text> : null}

      {/* Address */}
      <TextInput
        style={[styles.input, errors.address ? styles.inputError : null]}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      {errors.address ? <Text style={styles.error}>{errors.address}</Text> : null}

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: "80%", padding: 10, borderWidth: 1, marginBottom: 10 },
  inputError: { borderColor: "red" }, // Apply red border to error fields
  error: { color: "red", fontSize: 14, marginBottom: 10 }, // Style for error message
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
  generalError: {
    color: "red",  // Red text for general error message
    fontSize: 16,
    marginTop: 1,
  },
});