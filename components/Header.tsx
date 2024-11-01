import { View, Text } from 'react-native'
import React from 'react'

const Header = ({title} : {title: String}) => {
  return (
    <View>
      <View className='flex flex-row w-full items-center top-5 '>
        <View className='w-10 h-10 rounded-full bg-primary'>

        </View>
        <View className='flex w-3/4'>
          <Text className=' text-white text-center text-lg font-semibold drop-shadow-md c w-fit '>{title}</Text>
        </View>

        
      </View>
    </View>
  )
}

export default Header