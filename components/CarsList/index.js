
import React from "react";
import styles from "./styles";
import CarItem from "../CarItem";
import { View, Text, FlatList } from "react-native";



const CarsList = () => {
const list = [
    {
        title: "Model S", 
        subtitle: "Order Online for ", 
        tag: "Touchless Delivery", 
        image: require('../../assets/images/ModelS.jpeg')
    },
    {
        title: "Model Y", 
        subtitle: "Order Online for ", 
        tag: "Touchless Delivery", 
        image: require('../../assets/images/ModelY.jpeg')
    },
    {
        title: "Model 3", 
        subtitle: "Order Online for ", 
        tag: "Touchless Delivery", 
        image: require('../../assets/images/Model3.jpeg')
    },
    {
        title: "Model X", 
        subtitle: "Order Online for ", 
        tag: "Touchless Delivery", 
        image: require('../../assets/images/ModelX.jpeg')
    },
    {
        title: "Solar Panels", 
        subtitle: "Lowest Cost Solar Panels in America", 
        tag: "", 
        image: require('../../assets/images/SolarPanels.jpeg')
    },
    {
        title: "Solar Roof", 
        subtitle: "Produce Clean Energy From Your Roof", 
        tag: "", 
        image: require('../../assets/images/SolarRoof.jpeg')
    }
]

    return (
        <View style={styles.container}>

            <FlatList
                data={list}
                renderItem={({item}) => <CarItem car={item} />}
            />

        </View>

    )

}

export default CarsList