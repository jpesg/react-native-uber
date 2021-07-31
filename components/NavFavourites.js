import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, Uk",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, Uk",
  },
];
//todo add onPress
const NavFavourites = () => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tw`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type={"ionicon"}
            color={"white"}
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
