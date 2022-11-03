import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
  const {
    params: {
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
    },
  } = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <BasketIcon />

      <ScrollView className="bg-white">
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-4 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View>
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row items-center space-x-2 my-1">
              <View className="flex-row items-center">
                <StarIcon size={22} opacity={0.5} color="#00CCBB" />
                <Text className="text-[#00CCBB] text-xs">{rating}</Text>
                <Text className="text-gray-400 text-xs"> ~ {genre}</Text>
              </View>
              <View className="flex-row items-center">
                <MapPinIcon size={22} opacity={0.4} color="gray" />
                <Text className="text-gray-400 text-xs">{address}</Text>
              </View>
            </View>
            <Text className="text-gray-400 mt-2 pb-4">{shortDes}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-200">
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>

          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            {/*DishRows*/}
            {dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
