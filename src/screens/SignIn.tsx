import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import CustomTextInput from '../common/CustomTextInput';

const SignInScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <CustomTextInput
        icon={require('../images/user.png')}
        placeholder={'Username or Email'}
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        icon={require('../images/lock.png')}
        placeholder={'Password'}
        type="password"
        value={password}
        onChangeText={setPassword}
        rightIcon={require('../images/show.png')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button
        mode="contained"
        onPress={handleSignIn}
        style={styles.signInButton}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonLabel}
      >
        Login
      </Button>
      <Text style={styles.orContinueText}>- OR Continue with -</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity>
          <Image source={require('../images/Google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../images/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../images/Facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.createAccountText}>Create An Account <Text style={styles.signUpLink}>Sign Up</Text></Text>
      </TouchableOpacity>
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
    color: '#000000',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: 'red',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#F83758',
    marginBottom: 20,
    borderRadius: 4,
    height: 55,
    justifyContent: 'center',
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
  orContinueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    color: '#666',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialIcon: {
    width: 70,
    height: 70,
  },
  createAccountText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  signUpLink: {
    color: 'red',
    fontSize: 16,
  },
});

export default SignInScreen;
