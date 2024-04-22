// // AboutScreen.js
// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// const AboutScreen = () => {
//   return (
//     <ImageBackground
//         source={{
//           uri: './background.jpg',
//         }}
//         style={styles.backgroundImage}
//       >
//       <View style={styles.container}>
//         <Text>This is the Food Connect app.</Text>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     opacity: 0.2,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default AboutScreen;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
  return (
    
      <View style={styles.container}>
        <Image
          source={('./FINAL IMAGE.jpeg')}
          style={styles.logo}
        />
        <Text style={styles.heading}> “"Food Connect" is a transformative food donation platform that bridges the gap between surplus food providers and those in need. By empowering restaurants, food stores, and individuals to easily donate excess food, we aim to significantly reduce food waste while addressing food insecurity and poverty. Our platform is designed to streamline the donation process, ensuring that no edible food goes to waste. Together, we can make a meaningful impact and create a more sustainable and equitable food system for all.</Text>
      </View>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.2,
  },
 
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'Times New Roman'
    },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },

  logo: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
});

export default AboutScreen;


