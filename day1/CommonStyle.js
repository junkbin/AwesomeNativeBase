import {StyleSheet} from 'react-native';

let commonStyles = StyleSheet.create({
    makeCenter : {
        flex:1,
        display:'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },

    bgfy : {
        backgroundColor: 'tomato',
    },

    colorfy : {
        color: 'white'
    },

    fontify : {
        fontSize : 30,
        fontFamily: 'cursive',
        fontWeight: '400',
    }

});


export default commonStyles;