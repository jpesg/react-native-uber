import React from "react";
import { StyleSheet, Image, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import NavFavourites from "../components/NavFavourites";
import Logo from "../assets/logo.png";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={Logo}
        />
      </View>
      <GooglePlacesAutocomplete
        styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
        debounce={400}
        placeholder={"Where from?"}
        nearbyPlacesAPI="GooglePlacesSearch"
        query={{ key: GOOGLE_MAPS_KEY, language: "en" }}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          console.log({
            data,
            detail,
          });
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );

          dispatch(setDestination(null));
        }}
        returnKeyType={"search"}
      />
      <NavOptions />
      <NavFavourites />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
