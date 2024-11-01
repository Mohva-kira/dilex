import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import ProductCard from '@/components/ProductCard'

const Products = () => {
  return (
    <Container title={"Produits"}>
      <ScrollView className=' mb-24'  >

      <View className='bg-dark-blue rounded-xl'>
          <Text style={{
            textShadowColor: 'rgba(0, 0, 0, 0.8)', 
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 4,
          }} className='text-white text-center text-xl font-bold shadow-md shadow-black'> Petit dej  </Text>
          <View className=' flex flex-row flex-wrap p-2 w-full justify-around space-x-2 space-y-2'>

           
          { [0,1,2,3,4,5].map(item => <ProductCard />)

          }
          </View>
        </View>

        <View className='bg-dark-blue mt-5 rounded-xl'>
          <Text style={{
            textShadowColor: 'rgba(0, 0, 0, 0.8)', 
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 4,
          }} className='text-white text-center text-xl font-bold shadow-md shadow-black'> Mini Box  </Text>
          <View className=' flex flex-row flex-wrap p-2 w-full justify-around space-x-2 space-y-2'>

           
          { [0,1,2,3,4,5].map(item => <ProductCard />)

          }
          </View>
        </View>

        <View className='bg-dark-blue rounded-xl mt-5'>
          <Text style={{
            textShadowColor: 'rgba(0, 0, 0, 0.8)', 
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 4,
          }} className='text-white text-center text-xl font-bold shadow-md shadow-black'> Plateaux  </Text>
          <View className=' flex flex-row flex-wrap p-2 w-full justify-around space-x-2 space-y-2'>

           
          { [0,1,2,3,4,5].map(item => <ProductCard />)

          }
          </View>
        </View>

       
      </ScrollView>
    </Container>
  )
}

export default Products