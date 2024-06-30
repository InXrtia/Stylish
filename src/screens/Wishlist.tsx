import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
// import Footer from '../common/Footer'; 

const Wishlist = () => {
  return (
    <ScrollView style={styles.container}>
    <View>
      {/* <Text style={styles.text}>Coming Soon!</Text> */}
      <TouchableOpacity>
          <Image source={require('../images/comingsoon.jpg')} style={styles.menuIcon} />
        </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuIcon:{
    width:'100%',
    height:850,
  },
  text:{
    justifyContent:'center',
    alignSelf:'center',
  }
});

export default Wishlist;