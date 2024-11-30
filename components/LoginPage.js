import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from "react-native";
import useWarmUpBrowser from "../hooks/useWarmUpBrowser";
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from "@clerk/clerk-expo";
import googleIcon from "../assets/icons/google.png";

WebBrowser.maybeCompleteAuthSession();
export default function LoginPage({ navigation }) {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

const onPress = React.useCallback(async () => {
  try {
    const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

    if (createdSessionId) {
      // Set the active session using the created session ID
      setActive({ session: createdSessionId });
    } else {
      console.log("No session ID was created. Handle fallback here.");
    }
  } catch (err) {
    console.error("OAuth error", err);
  }
}, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* <Button title="Login" onPress={handleLogin} style={styles.buttonText}/>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} style={styles.buttonText}/> */}

            {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin} // Navigates to the Login screen
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.googleButton}
        onPress={onPress} // Triggers the Google OAuth flow
      >
        <Image source={googleIcon} style={styles.googleLogo} />
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")} // Navigates to the Login screen
      >
        <Text > Don't have an account ?<Text style={styles.buttonTextt}><u> SignUp </u></Text> </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: "80%", padding: 10, borderWidth: 1, marginBottom: 10 },

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
  buttonTextt: {
    color: "#ffa500",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d0c6c6",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 2, // Adds a shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
