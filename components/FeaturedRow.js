import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowSmallRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowSmallRightIcon color="#00CCBB" />
      </View>
      <Text className="font-bold text-gray-400 text-xs px-4">
        {description}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {/*RESTAURANT CARDS */}
        <RestaurantCard
          id="123"
          imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
          title="Copernic Pizza"
          rating="4.7"
          genre="Italian"
          address="gungoren"
          shortDes="Test"
          dishes={[]}
          long={25.6}
          lat={20}
        />
        <RestaurantCard
          id="123"
          imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
          title="Copernic Pizza"
          rating="4.7"
          genre="Italian"
          address="gungoren"
          shortDes="Test"
          dishes={[]}
          long={25.6}
          lat={20}
        />
        <RestaurantCard
          id="123"
          imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
          title="Copernic Pizza"
          rating="4.7"
          genre="Italian"
          address="gungoren"
          shortDes="Test"
          dishes={[]}
          long={25.6}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
