import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

type InputProps = {
  service: {
    title: string;
    image: string;
  };
};

const ServiceCard = ({service}: InputProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: service.image,
        }}
      />
      <Text style={styles.title}>{service.title}</Text>
    </View>
  );
};

export default ServiceCard;
