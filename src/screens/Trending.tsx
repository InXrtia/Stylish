import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Searchbar, Avatar } from 'react-native-paper';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const HomePage: React.FC = () => {
  const [data, setData] = useState<Product[] | null>(null);

  const getAPIData = async () => {
    const url = 'https://fakestoreapi.com/products';
    let result = await fetch(url);
    let data: Product[] = await result.json();
    setData(data);
  };

  useEffect(() => {
    getAPIData();
  }, []);

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
      <Searchbar placeholder="Search any Product..." style={styles.searchbar} value={''} />

      {/* API Data */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Product List</Text>
        {data && data.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productPrice}>${product.price}</Text>
            <Text style={styles.productCategory}>{product.category}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lady: {
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  productCategory: {
    fontSize: 14,
    color: '#888',
  },
  productDescription: {
    fontSize: 14,
    color: '#444',
  },
});

export default HomePage;
