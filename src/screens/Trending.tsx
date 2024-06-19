import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Searchbar, Avatar } from 'react-native-paper';

const HomePage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../images/3lines.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <Image source={require('../images/img.png')} style={styles.logo} />
        <Avatar.Image size={40} source={require('../images/lady.png')} style={styles.lady} />
      </View>


      {/* Search Bar */}
      
      <Searchbar placeholder="Search any Product..." style={styles.searchbar} value={''}  />


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lady:{ 
    // width:10,
    // height:30,
  },
  menuIcon: {
    width: 52,
    height: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
   searchBar: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  searchbar: {
    margin: 10,
  },
  logo: {
    width: 150,
    height: 55,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  featuredCategories: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  banner: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffdddd',
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dealOfTheDay: {
    padding: 10,
  },
  dealItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dealItem: {
    flex: 1,
    marginRight: 10,
  },
  dealImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  discount: {
    color: 'red',
  },
  specialOffers: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ffffdd',
  },
  trendingProducts: {
    padding: 10,
  },
  trendingItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trendingItem: {
    flex: 1,
    marginRight: 10,
  },
  trendingImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  newArrivals: {
    padding: 10,
    alignItems: 'center',
  },
  sponsored: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ffdddd',
  },
  sponsoredItem: {
    width: '100%',
    alignItems: 'center',
  },
  sponsoredImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },

});

export default HomePage;
