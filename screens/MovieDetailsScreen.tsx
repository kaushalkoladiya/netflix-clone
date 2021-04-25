import React, { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

import movieDetails from "../assets/data/movie";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Episode from "../components/Episode";
import { Picker } from "@react-native-picker/picker";
import VideoPlayer from "../components/VideoPlayer";
import { Episode as EpisodeType } from "../types";

interface ListHeaderComponentProps {
  seasonsList: Array<string>;
  onSeasonsChange: (value: string, index: number) => void;
  season: string;
  selectedEpisode: EpisodeType;
}

const ListHeaderComponent = ({
  season,
  seasonsList,
  onSeasonsChange,
  selectedEpisode,
}: ListHeaderComponentProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{movieDetails.title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.match}>98% match</Text>
        <Text style={[styles.greyText, styles.marginHorizontal]}>
          {movieDetails.year}
        </Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}>12+</Text>
        </View>
        <Text style={[styles.greyText, styles.marginHorizontal]}>
          {movieDetails.numberOfSeasons} Seasons
        </Text>
        <MaterialIcons name="hd" color="white" size={24} />
      </View>
      <View>
        <Pressable
          onPress={() => console.log("Hi Universe!")}
          style={[styles.playButton, styles.button, styles.displayRow]}
        >
          <Entypo name="controller-play" color="#000" size={24} />
          <Text style={styles.playButtonText}>Play</Text>
        </Pressable>
        <Pressable
          onPress={() => console.log("Hi Universe!")}
          style={[styles.downloadButton, styles.button, styles.displayRow]}
        >
          <Feather name="download" color="white" size={24} />
          <Text style={styles.downloadButtonText}>Download</Text>
        </Pressable>
      </View>
      <View>
        <Text style={[styles.marginBottom, styles.marginTop]}>
          {movieDetails.plot}
        </Text>
        <Text style={[styles.greyText, styles.marginBottom]}>
          Cast: {movieDetails.cast}
        </Text>
        <Text style={[styles.greyText, styles.marginBottom]}>
          Creator: {movieDetails.creator}
        </Text>
      </View>
      <View
        style={[
          styles.displayRow,
          styles.marginTop,
          { justifyContent: "flex-start" },
        ]}
      >
        <View style={[styles.alignItemsCenter, styles.marginHorizontal2]}>
          <AntDesign name="plus" size={25} color="#fff" />
          <Text
            style={[styles.textDarkGrey, styles.smallFont, styles.marginTop]}
          >
            My List
          </Text>
        </View>
        <View style={[styles.alignItemsCenter, styles.marginHorizontal2]}>
          <Feather name="thumbs-up" size={25} color="#fff" />
          <Text
            style={[styles.textDarkGrey, styles.smallFont, styles.marginTop]}
          >
            Rate
          </Text>
        </View>
        <View style={[styles.alignItemsCenter, styles.marginHorizontal2]}>
          <Ionicons name="share-social" size={25} color="#fff" />
          <Text
            style={[styles.textDarkGrey, styles.smallFont, styles.marginTop]}
          >
            Share
          </Text>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        {season ? (
          <Picker
            style={styles.picker}
            selectedValue={season}
            onValueChange={onSeasonsChange}
            dropdownIconColor="white"
          >
            {seasonsList.map((season) => (
              <Picker.Item key={season} label={season} value={season} />
            ))}
          </Picker>
        ) : null}
      </View>
    </View>
  );
};

const MovieDetailsScreen = () => {
  const seasons = movieDetails.seasons.items.map((item) => item.name);

  const [selectedSeason, setSelectedSeason] = useState<{
    name: string;
    index: number;
  }>({
    name: seasons[0],
    index: 0,
  });

  const [selectedEpisode, setSelectedEpisode] = useState(
    movieDetails.seasons.items[selectedSeason.index].episodes.items[0]
  );

  const handleSeasonsChange = (name: string, index: number) => {
    setSelectedSeason({ name, index });
  };

  const handleEpisodeChange = (episode: EpisodeType) => {
    setSelectedEpisode(episode);
    // console.log(episode);
  };

  // console.log(selectedEpisode);

  return (
    <View style={styles.container}>
      <VideoPlayer episode={selectedEpisode} />
      <FlatList
        data={movieDetails.seasons.items[selectedSeason.index].episodes.items}
        ListHeaderComponent={
          <ListHeaderComponent
            seasonsList={seasons}
            onSeasonsChange={handleSeasonsChange}
            season={selectedSeason.name}
            selectedEpisode={selectedEpisode}
          />
        }
        renderItem={({ item }) => (
          <Episode episode={item} onClick={handleEpisodeChange} />
        )}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={{ marginBottom: "60%" }}
      />
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  match: {
    color: "#00AA00",
    marginRight: 30,
    fontWeight: "bold",
  },
  greyText: {
    color: "#757575",
  },
  marginHorizontal: {
    marginHorizontal: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
    marginHorizontal: 5,
  },
  age: {
    color: "#000",
    fontWeight: "bold",
  },
  button: {
    padding: 2,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  playButton: {
    backgroundColor: "#fff",
    marginTop: 10,
  },
  playButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#424242",
    marginTop: 10,
  },
  marginBottom: {
    marginBottom: 5,
  },
  marginTop: {
    marginTop: 5,
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textDarkGrey: {
    color: "darkgrey",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  marginHorizontal2: {
    marginHorizontal: 20,
  },
  smallFont: {
    fontSize: 12,
  },
  pickerContainer: {},
  picker: {
    color: "#fff",
    width: 130,
  },
});
