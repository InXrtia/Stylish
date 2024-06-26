import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

const Api = () => {
    const [data, setData] = useState<Product[] | null>(null);

    const getAPIData = async () => {
        // API call
        const url = "https://fakestoreapi.com/products";
        let result = await fetch(url);
        let data: Product[] = await result.json();
        setData(data);
    }

    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>Product List</Text>
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
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
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

export default Api
