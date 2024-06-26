import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, Image } from 'react-native';
import { Button } from 'react-native-paper';
import CustomTextInput from '../common/CustomTextInput';
import { Navigation } from '@mui/icons-material';

const ForgotPasswordScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Handle forgot password logic
    Alert.alert('Password Reset', 'An email has been sent to reset your password.');
    navigation.navigate('API');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot password?</Text>
      <CustomTextInput
        icon={require('../images/Mail.png')}
        placeholder={'Enter your email address'}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.description}>
        * We will send you a message to set or reset your new password
      </Text>
      <Button mode="contained" onPress={handleForgotPassword} style={styles.submitButton}  contentStyle={styles.buttonContent}
        labelStyle={styles.buttonLabel}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    alignItems: 'center',
    lineHeight: 43,
    marginVertical: 20,
    fontFamily: 'Montserrat',
    width: 250,
    height: 86,
    color: '#000000',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    lineHeight: 20,
  },
  submitButton: {
    backgroundColor: '#F83758',
    marginBottom: 20,
    borderRadius: 4,
    width: 367,
    height: 55,
    alignSelf: 'center',
  },
  buttonContent: {
    height: '100%',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ForgotPasswordScreen;
