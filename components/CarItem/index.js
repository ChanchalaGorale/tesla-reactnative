
import React from 'react';
import {  Text, View,ImageBackground } from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';

const CarItem=(props)=>{

    const {title, subtitle, image, tag } = props.car

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subtitle}<Text style={styles.tag}>{tag}</Text></Text>
            </View>
          
            <View style={styles.btnContainer}>
                <StyledButton type="primary" name="Custom Order" onpress={()=>{console.log("Custom Order")}}/>
                <StyledButton type="secondary" name="Existing Inventory" onpress={()=>{console.log("Existing Inventory")}}/>
            </View> 
          
      </View>
    )

}

export default CarItem