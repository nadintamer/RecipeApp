import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native';
import Meals from './App/Data/Meals';
import RecipeRow from './App/Components/RecipeRow';
import Colors from './App/Themes/Colors';

export default function App() {
  const renderRecipeRow = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <RecipeRow
          title={item.strMeal}
          category={item.strCategory}
          imageUrl={item.strMealThumb}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
				<Text style={styles.logoText}>nomnoms</Text>
			</View>
      <FlatList
        style={styles.list}
        data={Meals}
        renderItem={renderRecipeRow}
        keyExtractor={(item) => item.idMeal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkTurquoise,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
    marginBottom: 10,
	},
	logoText: {
		width: '100%',
		textAlign: 'center',
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		textShadowColor:'seagreen',
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 0,
	},
  list: {
    flex: 1,
    width: '100%',
  },
  listItem: {
    marginHorizontal: 15,
    marginBottom: 10,
  }
});
