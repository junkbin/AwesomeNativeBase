import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Four extends React.Component {

    render(){
        return (
            <View style={[styles.makeCenter,  {flex:1},  {backgroundColor:'royalblue'}]}>
                <Text style={[styles.beautify]}>Hello</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    beautify: {
        fontSize : 60,
        fontFamily : 'cursive',
        color: 'white'
    },

    makeCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});