import React from "react";
import { Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text, View } from "../Themed";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: Array<{ id: string; poster: string }>;
  };
}

const HomeCategory = ({ category }: HomeCategoryProps) => {
  return (
    <View>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 170,
    resizeMode: "cover",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
