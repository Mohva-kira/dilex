import { View, Text } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import Container from '@/components/Container';

const ProductDetails = () => {

const { id } = useLocalSearchParams();
 

  return (
    <Container title={`${id}`}>
      
      <Text>ProductDetails {id} </Text>
    </Container>
  )
}

export default ProductDetails