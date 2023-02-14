import React from 'react';
import { View, Text, StyleSheet, Image, Linking, Button } from 'react-native';
import Title from './Title';

function Article({data}) {

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{data.name}</Title>
      <View style={styles.imageView}>
        <Image source={{uri: data.logo}} style = {styles.image}/> 
      </View>
      <Text style={styles.text}>Foundation year: {data.founded}</Text>
      <Text style={styles.text}>{data.description}</Text>
      <Button onPress={() => { Linking.openURL(data.oficialHomePage); }} 
        title="Learn More"
        color="#299fbd"
      />
    </View>
  );
}

const styles = StyleSheet.create({

  title: {
    color: '#888',
  },
  imageView: {
    width:"100%",
    alignItems: 'center'
  },
  image: {
    height: 80,
    width: "100%",
    aspectRatio: 1
  },
  text: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#fff'
  },
});

export default Article;
