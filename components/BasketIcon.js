import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../slices/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  console.log("HEY ", basketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-lg text-white font-extrabold bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {basketTotal} ₺
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
