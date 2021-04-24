import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

import categoriesData from "../assets/data/categories";
import { FlatList } from "react-native-gesture-handler";
import HomeCategory from "../components/HomeCategory";

const HomeScreen = () => {
  // console.log(categoriesData.items[0].movies.map(item => item.poster));

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData.items}
        renderItem={({ item }) => (
          <HomeCategory key={item.id} category={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    // backgroundColor: "#fff"
  },
});
