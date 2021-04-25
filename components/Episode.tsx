import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Episode as EpisodeType } from "../types";
import { Text, View } from "./Themed";

interface EpisodeProps {
  episode: EpisodeType;
  onClick: (episode: EpisodeType) => void;
}

const Episode = ({ episode, onClick }: EpisodeProps) => {
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
        <TouchableOpacity
          onPress={() => onClick(episode)}
          style={styles.playButton}
        >
          <FontAwesome5 name="play" size={20} color="#fff" />
        </TouchableOpacity>
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
  playButton: {
    marginHorizontal: 10,
  },
});
