import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { Button } from 'react-native-paper';
import CustomTextInput from '../common/CustomTextInput';

const SignUpScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    // Handle sign up logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
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
      <CustomTextInput
        icon={require('../images/lock.png')}
        placeholder={'Confirm Password'}
        type="password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        rightIcon={require('../images/show.png')}
      />
      <Text style={styles.agreementText}>
        By clicking the <Text style={styles.registerText}>Register</Text> button, you agree to the public offer
      </Text>
      <Button
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonLabel}
        mode="contained" onPress={handleSignUp} style={styles.signUpButton}>
        Create Account
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
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.loginText}>I Already Have an Account <Text style={styles.loginLink}>Login</Text></Text>
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
    width: 250,
    height: 86,
    // padding: 50,
    color: '#000000',
  },
  agreementText: {
    fontSize: 17,
    color: '#666',
    // fontFamily:'Montserrat',
    marginBottom: 30,
    lineHeight: 25,
  },
  registerText: {
    color: '#F83758',
  },
  signUpButton: {
    backgroundColor: '#F83758',
    marginBottom: 20,
    borderRadius: 4,
    width: 367,
    // lineHeight:44,
    height: 55,
    alignSelf: 'center',
  },
  buttonContent: {
    height: '100%',
    justifyContent: 'center',
    // fontWeight:'500',
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
    padding: 15,
    gap: 1,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  loginLink: {
    color: '#F83758',
    fontSize: 16,
  },
});

export default SignUpScreen;
