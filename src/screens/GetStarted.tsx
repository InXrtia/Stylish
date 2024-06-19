import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

const GetStartedScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ImageBackground source={require('../images/started.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>You want Authentic, here you go!</Text>
        <Text style={styles.small}>Find it here, buy it now!</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('HomePage')}
          style={styles.getStartedButton}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Get Started
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add overlay for better readability
    width: '100%',
  },
  title: {
    fontSize: 40,
    color: 'white',
    height: 170,
    width: 300,
    top: 250,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  small: {
    color: '#F2F2F2',
    top: 250,
    width: '70%',
    textAlign: 'center',
    fontSize: 20,
  },
  getStartedButton: {
    backgroundColor: '#F83758',
    borderRadius: 4,
    height: 55,
    justifyContent: 'center',
    width: '70%',
    top: 270,
  },
  buttonContent: {
    height: '100%',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'medium',
    color: '#fff',
  },
});

export default GetStartedScreen;
