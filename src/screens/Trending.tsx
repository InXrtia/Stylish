import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchProducts, filterProducts } from '../redux/productsSlice';
import CustomTextInput from '../common/CustomTextInput';
import { Avatar } from 'react-native-paper';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredData, status } = useSelector((state: RootState) => state.products);
  const [text, setText] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(filterProducts(text));
  }, [text, dispatch]);

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
      <CustomTextInput
        icon={require('../images/search.png')}
        placeholder={'Search any Product..'}
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      {/* API Data */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Product List</Text>
        {status === 'loading' && <ActivityIndicator size="large" color="#0000ff" />}
        {status === 'failed' && <Text>Failed to load products</Text>}
        {filteredData.length === 0 && status !== 'loading' && <Text>No results found</Text>}
        {filteredData.map((product) => (
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
  input: {
    width: '100%',
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
    left: 16,
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
