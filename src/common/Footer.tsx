import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface FooterProps {
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
}

const Footer: React.FC<FooterProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => setSelectedTab(0)}>
        <Image source={require('../images/home.png')} style={styles.icon} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => setSelectedTab(1)}>
        <Image source={require('../images/Vector.png')} style={styles.icon} />
        <Text>Wishlist</Text>
      </TouchableOpacity>
      <View style={styles.cartButtonWrapper}>
        <TouchableOpacity style={styles.cartButton} onPress={() => setSelectedTab(2)}>
          <Image source={require('../images/shoppingcart.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.footerButton} onPress={() => setSelectedTab(3)}>
        <Image source={require('../images/search.png')} style={styles.icon} />
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => setSelectedTab(4)}>
        <Image source={require('../images/setting.png')} style={styles.icon} />
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 70,
    borderBlockColor: '#fff',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'absolute',
    backgroundColor: '#fffff',
  },
  footerButton: {
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

export default Footer;
