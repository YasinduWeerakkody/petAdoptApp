// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function PetDetailsPage({ navigation, route }) {
//   const { pet } = route.params; // Pass pet details from HomePage

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{pet.name}</Text>
//       <Text>Breed: {pet.breed}</Text>
//       <Text>Age: {pet.age}</Text>
//       <Text>Address: {pet.address}</Text>
//       <Button title="Chat with Owner" onPress={() => navigation.navigate("Chat")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 24, marginBottom: 10 },
// });

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function PetDetailsPage({ route, navigation }) {
  const { pet } = route.params; // Receive pet data from navigation

  return (
    <ScrollView style={styles.container}>

      {/* Pet Image */}
      <Image source={{ uri: pet.image }} style={styles.petImage} />

      {/* Pet Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.petName}>{pet.name}</Text>
        <Text style={styles.petLocation}>552 N Tryon Street 28155</Text>

        {/* Key Info */}
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Age</Text>
            <Text style={styles.infoValue}>{pet.age}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Breed</Text>
            <Text style={styles.infoValue}>{pet.breed}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Sex</Text>
            <Text style={styles.infoValue}>{pet.sex}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Weight</Text>
            <Text style={styles.infoValue}>{pet.weight}</Text>
          </View>
        </View>

        {/* About Section */}
        <Text style={styles.aboutTitle}>About {pet.name}</Text>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...
        </Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>Read More</Text>
        </TouchableOpacity>

        {/* Owner Section */}
      <TouchableOpacity
        style={styles.ownerContainer}
       
      >
        <Image
          source={{ uri: "/assets/images/userprofile.png" }} // Replace with the owner's image
          style={styles.ownerImage}
        />
        <View style={styles.ownerDetails}>
          <Text style={styles.ownerName}>Jhon Carry</Text>
          <Text style={styles.ownerRole}>Pet Owner</Text>
        </View>
        <FontAwesome name="chevron-right" size={24} color="#777" style={styles.chevronIcon} />
      </TouchableOpacity>


        {/* Adopt Me Button */}
        <TouchableOpacity style={styles.adoptButton}
         onPress={() => navigation.navigate("ChatPage", { ownerName: "Jhon Carry" })}
        >
          <Text style={styles.adoptButtonText}>Adopt Me</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  petImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
  },
  petName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  petLocation: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  infoBox: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    width: "20%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 12,
    color: "#777",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  aboutText: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    lineHeight: 20,
  },
  readMore: {
    fontSize: 14,
    color: "#ffa500",
    marginTop: 5,
  },
  
  ownerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  ownerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  ownerDetails: {
    flex: 1,
  },
  ownerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  ownerRole: {
    fontSize: 14,
    color: "#777",
  },
  chevronIcon: {
    marginLeft: 10,
  },
  

  adoptButton: {
    backgroundColor: "#ffa500",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  adoptButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
