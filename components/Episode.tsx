import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "./Themed";

interface EpisodeProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

const Episode = ({ episode }: EpisodeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.displayRow}>
          <Image source={{ uri: episode.poster }} style={styles.image} />
          <View style={styles.marginLeft}>
            <Text>{episode.title}</Text>
            <Text style={styles.greyText}>{episode.duration}</Text>
          </View>
        </View>
        <Feather name="download" color="white" size={24} />
      </View>
      <Text style={styles.greyText}>{episode.plot}</Text>
    </View>
  );
};

export default Episode;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 5,
    marginBottom: 10,
    flex: 1,
  },
  image: {
    height: 70,
    borderRadius: 5,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  greyText: {
    color: "#757575",
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  displayRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  marginLeft: {
    marginLeft: 10,
  },
});
