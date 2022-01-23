import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecipeDetail from './App/Components/RecipeDetail';
import RecipeRow from './App/Components/RecipeRow';

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeDetail/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
