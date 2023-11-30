
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export function Routes(){
  return(
    <Tab.Navigator>

      <Tab.Screen
      name='home'
      component={Home}     
      options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, size, color})=> {
          if(focused){
            return  <Ionicons name="home" size={32} color="gray" />
          }
          return <Ionicons name="home-outline" size={32} color="gray" />
        }
      }} 
      />

      <Tab.Screen
      name='passwords'
      component={Passwords}   
      options={{        
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, size, color})=> {
          if(focused){
            return  <Ionicons name="lock-closed" size={32} color='gray' />
          }
          return <Ionicons name="lock-closed-outline" size={32} color="gray" />
        }
      }}         
      />

    </Tab.Navigator>
  )
}