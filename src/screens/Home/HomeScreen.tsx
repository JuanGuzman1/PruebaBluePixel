import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import {services} from '../../assets/services';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={services}
        renderItem={({item}) => <ServiceCard key={item.title} service={item} />}
      />
    </View>
  );
};

export default HomeScreen;
