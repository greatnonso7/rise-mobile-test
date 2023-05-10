import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
