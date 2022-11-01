import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDes,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDes,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow pt-2"
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-lg font-bold mt-3">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={22} opacity={0.5} color="#00CCBB" />
          <Text className="text-[#00CCBB] text-xs">{rating}</Text>
          <Text className="text-gray-400 text-xs"> - {genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon size={22} opacity={0.4} color="gray" />
          <Text className="text-gray-400 text-xs">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
