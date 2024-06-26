import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  icon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;
  type?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ 
  value, 
  onChangeText, 
  placeholder, 
  icon, 
  rightIcon, 
  onRightIconPress, 
  type, 
  ...rest 
}) => {
  return (
    <View style={styles.container}>
      {icon && <Image source={icon} style={styles.imageIcon} />}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        {...rest}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Image source={rightIcon} style={styles.rightImageIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    alignSelf: 'center',
    width: 370,
    height: 63,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  imageIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rightImageIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
});

export default CustomTextInput;
