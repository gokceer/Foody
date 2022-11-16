import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 1000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={
          Math.round(Math.random())
            ? require("../assets/foody_1.gif")
            : require("../assets/foody_2.gif")
        }
        animation="slideInUp"
        iterationCount={1}
        className={"h-96 w-96"}
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-white font-bold text-center my-10 p-3"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;