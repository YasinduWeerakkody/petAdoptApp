import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function HomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample slider images
  const sliderImages = [
    "/assets/images/adptBanner1.jpg",
    "/assets/images/adptbanner2.jpg",
    "/assets/images/adptBanner1.jpg",
    // "https://via.placeholder.com/300x150.png?text=Pet+Adoption+2",
    // "https://via.placeholder.com/300x150.png?text=Pet+Adoption+3",
  ];

  // Sample pet data
  const petData = [
    { id: 1, name: "Buddy", category: "Dog", image: "/assets/images/adoptme.jpg", age: "2 years" , sex: "Male",weight:"25kg"},
    { id: 2, name: "Whiskers", category: "Cat", image: "/assets/images/cat.avif", age: "1 year" },
    { id: 3, name: "Chirpy", category: "Bird", image: "/assets/images/bird.jpg", age: "6 months" },
    { id: 4, name: "Rex", category: "Dog", image: "/assets/images/dog.jpg", age: "3 years" },
    { id: 5, name: "Mittens", category: "Cat", image: "/assets/images/cat.avif", age: "2 years" },
    { id: 6, name: "Chirpy", category: "Bird", image: "/assets/images/bird.jpg", age: "6 months" },
    { id: 7, name: "Rex", category: "Dog", image: "/assets/images/dog.jpg", age: "3 years" },
    { id: 8, name: "Mittens", category: "Cat", image: "/assets/images/cat.avif", age: "2 years" },
  ];

  // Filter pets based on the search query and selected category
  const filteredPets = petData.filter((pet) => {
    const matchesCategory =
      selectedCategory === "All" || pet.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearchQuery = pet.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.welcomeText}>Welcome, Yasindu</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
    <View style={styles.profileIconContainer}>
      <FontAwesome5 name="user" size={24} color="#fff" />
    </View>
  </TouchableOpacity>
      </View>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search pets..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} // Updates searchQuery state
        />
      </View>

      {/* Slider Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
        {sliderImages.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.sliderImage} />
        ))}
      </ScrollView>

      <View style={styles.categoryContainer}>
  <Text style={styles.sectionTitle}>Category</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
    {/* All Category */}
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === "All" && styles.selectedCategoryButton,
      ]}
      onPress={() => setSelectedCategory("All")}
    >
      <FontAwesome5 name="list" size={24} color={selectedCategory === "All" ? "#fff" : "#555"} />
      <Text
        style={[
          styles.categoryText,
          selectedCategory === "All" && styles.selectedCategoryText,
        ]}
      >
        All
      </Text>
    </TouchableOpacity>

    {/* Dog Category */}
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === "Dog" && styles.selectedCategoryButton,
      ]}
      onPress={() => setSelectedCategory("Dog")}
    >
      <FontAwesome5 name="dog" size={24} color={selectedCategory === "Dog" ? "#fff" : "#555"} />
      <Text
        style={[
          styles.categoryText,
          selectedCategory === "Dog" && styles.selectedCategoryText,
        ]}
      >
        Dogs
      </Text>
    </TouchableOpacity>

    {/* Cat Category */}
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === "Cat" && styles.selectedCategoryButton,
      ]}
      onPress={() => setSelectedCategory("Cat")}
    >
      <FontAwesome5 name="cat" size={24} color={selectedCategory === "Cat" ? "#fff" : "#555"} />
      <Text
        style={[
          styles.categoryText,
          selectedCategory === "Cat" && styles.selectedCategoryText,
        ]}
      >
        Cats
      </Text>
    </TouchableOpacity>

    {/* Bird Category */}
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === "Bird" && styles.selectedCategoryButton,
      ]}
      onPress={() => setSelectedCategory("Bird")}
    >
      <FontAwesome5 name="dove" size={24} color={selectedCategory === "Bird" ? "#fff" : "#555"} />
      <Text
        style={[
          styles.categoryText,
          selectedCategory === "Bird" && styles.selectedCategoryText,
        ]}
      >
        Birds
      </Text>
    </TouchableOpacity>
  </ScrollView>
</View>
      {/* Horizontal Pet List */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.petScroll}>
        {filteredPets.map((pet) => (
          <TouchableOpacity
            key={pet.id}
            style={styles.petCard}
            onPress={() => navigation.navigate("PetDetails", { pet: pet })}
          >
            <Image source={pet.image} style={styles.petImage} />
            <View style={styles.petDetails}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petAge}>{pet.age}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Add New Pet Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddPet")}
      >
        <Text style={styles.addButtonText}>Add New Pet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f7f7f7",
  },
  welcomeText: { fontSize: 18, fontWeight: "bold" },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  slider: { marginVertical: 10 },
  sliderImage: { width: 450, height: 200, marginRight: 5, borderRadius: 10, marginLeft: 5, marginTop: 10 },
  categoryContainer: { paddingHorizontal: 35, marginBottom: 10 , marginTop: -35},
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
 
  searchContainer: {
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },  

  categories: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  categoryButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginRight: 25,
    width: 60,
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  selectedCategoryButton: {
    backgroundColor: "#ffa500",
  },
  categoryText: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },
  selectedCategoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  
  
  petScroll: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  petCard: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
    alignItems: "center",
    width: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  petImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  petDetails: { alignItems: "center" },
  petName: { fontSize: 16, fontWeight: "bold" },
  petAge: { fontSize: 14, color: "#777" },
  addButton: {
    backgroundColor: "#ffa500",
    padding: 15,
    borderRadius: 25,
    margin: 15,
    alignItems: "center",
  },
  addButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  profileIconContainer: {
    backgroundColor: "#ffa500",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  
});
