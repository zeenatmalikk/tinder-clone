// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// export type ProfileProps={
//     name: string;
//     age: number;
//     photo: string;
//     bio: string;
// }
// export type CardProps = {
//     profile: ProfileProps;
// };

// const Card:React.FC<CardProps>  = ({ profile }) => {
//   return (
//     <SafeAreaView style={styles.card}>

//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     height:300,
//     // flex: 1,
//     borderRadius: 10,
//     overflow: 'hidden',
//     borderColor: '#e0e0e0',
//     borderWidth: 1,
//   },
//   image: {
//     width: '100%',
//     height: 300, // Set a fixed height to see if the image loads
//     resizeMode: 'cover',
//   },
//   infoContainer: {
//     padding: 15,
//     backgroundColor: 'white',
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   bio: {
//     fontSize: 16,
//     color: '#757575',
//     marginTop: 5,
//   },
// });

// export default Card;
type Props = {
  item: chatDataProps;
  index: number;
};
import { chatData, chatDataProps, DataType, profileData } from "@/constants";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Card = ({ item, index }: Props) => {
  return (
    <View className="absolute w-[360px] h-[360px] rounded-lg p-8">
      <Image
        source={item.imgUrl}
        style={{
          width: "90%",
          height: "90%",
        }}
      />
      <Text>{item.name}</Text>
    </View>
  );
};

export default Card;
