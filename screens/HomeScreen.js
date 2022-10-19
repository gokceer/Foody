import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

/*
    However, if your effect is mutating the DOM (via a DOM node ref) and the DOM mutation 
    will change the appearance of the DOM node between the time that it is rendered and your effect mutates it,
    then you don't want to use useEffect. 
    You'll want to use useLayoutEffect. 
    Otherwise the user could see a flicker when your DOM mutations take effect. 
    This is pretty much the only time you want to avoid useEffect and use useLayoutEffect instead.
*/

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      className="flex-1 bg-white pt-5"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {/* HEADER */}
      <View className="flex-row pb-3 items-center mx-2 space-x-2 px-1">
        <Image
          source={{
            uri: `https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450`,
          }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={25} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* SEARCH */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2 px-1">
        <View className="flex-row flex-1 bg-gray-200 space-x-2 p-2 items-center">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />

          <TextInput
            placeholder="Restaurants & Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* BODY */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories  */}
        <Categories />
        {/* Featured Rows  */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="2"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="3"
          title="Featured"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
