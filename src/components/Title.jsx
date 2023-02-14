import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = (props) => {
    return (
        <Text style={styles.title}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#888',
        fontSize: 22,
        fontWeight: 'bold',
      }, 
});

export default Title;