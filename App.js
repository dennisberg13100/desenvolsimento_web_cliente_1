import { StyleSheet,  ScrollView, View } from 'react-native';
import Article from './src/components/Article';
import Title from './src/components/Header';
import data from './src/data.json'

export default function App() {
  

  return (
    <View style={styles.container}>
      <Title>Frameworks for Hybrid Mobile Applications</Title>
      <ScrollView>
      {
        data.map((x) => {
          return (
            <Article data={x} key={x.index}/>
          )
        })
      } 
      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backGroundColor: "#fff",
  },
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
    color: '#fff',
    backgroundColor: '#299fbd',
  },
  text: {

    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold', 
    alignItems:"flex-start",
  }, 
  statusBar: {
    backgroundColor: '#299fbd',
  }
});
