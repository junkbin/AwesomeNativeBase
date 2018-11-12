import {StyleSheet} from 'react-native';

let commonStyles = StyleSheet.create({
    makeCenter : {
        flex:1,
        display:'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },

    bgfy : {
        backgroundColor: 'royalblue',
    },

    colorfy : {
        color: 'white'
    },

    fontify : {
        fontSize : 30,
        fontFamily: 'cursive',
        fontWeight: '900'
    }

});


export default commonStyles;