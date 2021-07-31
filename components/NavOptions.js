import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Car from "../assets/car.webp";
import Food from "../assets/food.png";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: Car,
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: Food,
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View style={tw`${!origin && "opacity-20"} `}>
            <Image
              style={{ width: 120, height: 200, resizeMode: "contain" }}
              source={item.image}
            />
            <Text style={tw`mt-1 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              color="white"
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
