import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
        title="testing"
      />
      <CategoryCard
        imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
        title="testing"
      />
      <CategoryCard
        imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
        title="testing"
      />
      <CategoryCard
        imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
        title="testing"
      />
      <CategoryCard
        imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
        title="testing"
      />
      <CategoryCard
        imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
        title="testing"
      />
      <CategoryCard
        imgUrl={"https://images.deliveryhero.io/image/fd-tr/LH/njhw-hero.jpg"}
        title="testing"
      />
    </ScrollView>
  );
};

export default Categories;
