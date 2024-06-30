import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../common/Footer'; 
import Main from '../screens/Trending';
import Wishlist from '../screens/Wishlist';
import Cart from '../screens/Cart';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

const Homepage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {selectedTab === 0 ? <Main /> : 
       selectedTab === 1 ? <Wishlist /> : 
       selectedTab === 2 ? <Cart /> : 
       selectedTab === 3 ? <Search /> : 
       <Profile />}
      <Footer selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> 
    </View>
  );
}

export default Homepage;
