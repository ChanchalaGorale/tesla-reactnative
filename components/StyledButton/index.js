import React from 'react';
import {  Text, View, Pressable } from 'react-native';
import styles from './styles'

const StyledButton=({type, name,onpress })=>{

    const backgroungcolor = type ==="primary"? "#171A20cc":"#FFFFFFA6"

    const textcolor = type ==="primary"? "#FFFFFFA6":"#171A20cc"


    return (
        <View style={styles.container}>
           <Pressable style={[styles.btn, {backgroundColor:backgroungcolor}]} onPress={onpress}>
               <Text style={[styles.btntext, {color:textcolor}]}>{name}</Text>
           </Pressable>
      </View>
    )

}

export default StyledButton