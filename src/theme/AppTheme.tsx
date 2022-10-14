import { StyleSheet } from 'react-native';

export const colores = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10
    },
    text:{
        color: 'black'
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    avatarContainer:{
        alignItems: 'center',
        marginTop: 10
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black'
    },

    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
    },
    menuBoton: {
        marginVertical: 10
    },
    menuTexto:{
        fontSize: 20, 
        color: 'black'
    }
});