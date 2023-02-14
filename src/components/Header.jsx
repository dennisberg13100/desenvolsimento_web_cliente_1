import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <Text style={styles.title}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
      }, 
});

export default Header;