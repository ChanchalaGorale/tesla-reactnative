import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem  title="Model S" subtitle="Order Online for " tag="Touchless Delivery" image={require('./assets/images/ModelS.jpeg')}/>
      {/* <CarItem  title="Model Y" subtitle="Order Online for " tag="Touchless Delivery"  image={require('./assets/images/ModelY.jpeg')}/>
      <CarItem  title="Model 3" subtitle="Order Online for " tag="Touchless Delivery"  image={require('./assets/images/Model3.jpeg')}/>
      <CarItem  title="Model X" subtitle="Order Online for " tag="Touchless Delivery"  image={require('./assets/images/ModelX.jpeg')}/>
      <CarItem  title="Solar Panels" subtitle="Lowest Cost Solar Panels in America" tag="" image={require('./assets/images/SolarPanels.jpeg')}/>
      <CarItem  title="Solar Roof" subtitle="Produce Clean Energy From Your Roof" tag=""  image={require('./assets/images/SolarRoof.jpeg')}/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
  },
  
});
