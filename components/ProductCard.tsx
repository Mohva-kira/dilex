import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from 'expo-router';

const ProductCard = () => {
  return (
    
       <View className='bg-primary-light bg-gradient-to-tr m-1 rounded-lg  -right-1 '>
                    <View className='w-full flex items-center flex-row space-x-4 p-2'>
                      <TouchableOpacity onPress={() => router.replace('/(root)/(product)/1')} className='rounded-full w-24 h-24 bg-black flex justify-center items-center'>
                        <View className='rounded-full w-20 h-20 bg-mono'>
                        
                        </View>

                      </TouchableOpacity>

                      <View className='rounded-full w-7 h-9 bg-primary flex justify-center items-center'>
                          <EvilIcons name="cart" size={20} color="white" />

                      </View>

                    </View>
                    <View className='flex w-full p-2'>
                      <Text className='text-white font-bold w-full text-xs'>
                        Epices de Mumbai
                      </Text>

                      <Text className='text-white font-bold w-full pt-2 text-xs'>
                      <Text className='font-light'> Fcfa </Text>3 500  
                      </Text>

                    </View>


    </View>
  
  )
}

export default ProductCard