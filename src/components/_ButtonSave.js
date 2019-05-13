import React, {Component} from 'react';
import {Button,StyleSheet, Text, View} from 'react-native';
import Styles from '../styles/Styles';

export default class ButtonSave extends Component{
    render(){
        return(
            <View>
                <Button  title="Learn More" color={Styles.buttonText.color} />
            </View>
        )

    }
}