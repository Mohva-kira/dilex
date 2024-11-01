import { icons } from '@/constants';
import { Stack, Tabs } from 'expo-router';
import { View, Image, ImageSourcePropType } from 'react-native';


const TabIcon = ({source, focused} : {source: ImageSourcePropType, focused: boolean}) => (
  <View className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-[#895129]" : ""} `}>
    <View className={` rounded-full w-10 h-10 items-center justify-center ${focused ? 'bg-[#895129]' : ''}`}>
      <Image source={source} tintColor={'gray'} resizeMode='contain' className='w-7 h-7' />
    </View>
  </View>
)
const  Layout = () => {

  return (
     <Tabs 
     initialRouteName='index' 
     screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: 'white',
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#333333',
        borderRadius: 50,
        paddingBottom: 0,
        overflow: 'hidden',
        marginHorizontal: 20,
        marginBottom: 20,
        height: 58,
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute'

      }
    }}
     >

      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.home} />
        }}
      />
            
    <Tabs.Screen
        name='products'
        options={{
          title: 'Produits',
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.shop} />
        }}
      />
    <Tabs.Screen
        name='history'
        options={{
          title: 'Commandes',
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.list} />
        }}
      />
    <Tabs.Screen
        name='chat'
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.chat} />
        }}
      />

   
      </Tabs>
  );
}

export default Layout