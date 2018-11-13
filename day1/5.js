import React from 'react';
import {WebView} from 'react-native';
import { View, Text } from 'native-base';

export default class Five extends React.Component {

    render() {
        return (
            <View style={[{flex:1, backgroundColor:'royalblue'}]}>
                <WebView source = {{ 
                    uri:'https://koderoom.github.io/aug-18' 
                }}/>
            </View>
        );
    }
}