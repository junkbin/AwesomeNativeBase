import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from './CommonStyle';
export default class Three extends React.Component {

    render(){
        return (
            <View style={[commonStyles.bgfy, commonStyles.makeCenter]}>
                <Text style={[commonStyles.colorfy, commonStyles.fontify]}>Helllo Native Base!!</Text>
            </View>
        );
    }
}