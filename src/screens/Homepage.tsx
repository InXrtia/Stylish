import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Settings } from 'react-native';
// import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Main from '../screens/Trending'
import Search from '../screens/Search'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import Wishlist from '../screens/Wishlist'


const Homepage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedTab, setelectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {selectedTab==0?(<Main/>):selectedTab==1?(<Search/>):selectedTab==2?(<Cart/>):selectedTab==0?(<Wishlist/>):(<Profile/>)}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Trending')}>
          <Image source={require('../images/home.png')} style={styles.icon} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton1}onPress={() => navigation.navigate('Search')}>
          <Image source={require('../images/Vector.png')} style={styles.icon} />
          <Text>Wishlist</Text>
        </TouchableOpacity>
        <View style={styles.cartButtonWrapper}>
          <TouchableOpacity style={styles.cartButton}onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../images/shoppingcart.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.footerButton2}onPress={() => navigation.navigate('Wishlist')}>
          <Image source={require('../images/search.png')} style={styles.icon} />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton3}onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../images/setting.png')} style={styles.icon} />
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 70,
    borderBlockColor: '#fff',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  footerButton: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },footerButton1: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },footerButton2: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton3: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  cartButtonWrapper: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 53,
    height: 56,
    bottom: 10,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  
  },
});

export default Homepage;
