import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar, Button, Avatar } from 'react-native-paper';

// interface CustomTextInputProps extends TextInputProps {
//   icon?: ImageSourcePropType;
//   rightIcon?: ImageSourcePropType;
//   onRightIconPress?: () => void;
//   type?: string;
// }
const HomePage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../images/3lines.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <Image source={require('../images/img.png')} style={styles.logo} />
        <Avatar.Image size={40} source={require('../images/lady.png')} style={styles.lady} />
      </View>

      <Searchbar placeholder="Search any Product..." style={styles.searchbar} value={''}  />


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuIcon: {
    width: 52,
    height: 50,
  },
  logo: {
    width: 150,
    height: 55,
  },
  lady:{ 
    // width:10,
    // height:30,
  },
  searchbar: {
    margin: 10,
  },
});

export default HomePage;
