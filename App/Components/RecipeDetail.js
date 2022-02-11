import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Colors from './Themes/Colors';

export default function RecipeDetail() {
  return (
  	<SafeAreaView style={styles.container}>
	    <View style={styles.logoContainer}>
		    <Text style={styles.logoText}>nomnoms</Text>
	    </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: "https:\/\/www.themealdb.com\/images\/media\/meals\/sutysw1468247559.jpg" }} />
      </View>
      <View style={styles.recipeContainer}>
        <Text style={styles.title}>Spaghetti Bolognese 🍝</Text>
        <Text style={styles.recipe}>{`Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or pur\u00e9e, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top. Enjoy!`}</Text>
      </View>
	  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.darkTurquoise,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  imageContainer: {
    flex: 10,
    margin: 15,
  },
	image: {
		flex: 1,
		borderRadius: 20,
		borderWidth: 3,
		borderColor: 'white',
	},
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },
  title: {
  	textAlign: 'center',
  	fontSize: 20,
		fontWeight: 'bold',
  	marginBottom: 10,
  },
	recipeContainer: {
		flex: 11,
		justifyContent: 'center',
		marginHorizontal: 15,
		paddingHorizontal: 20,
		backgroundColor: '#daf0e4',
		borderRadius: 20,
	},
	recipe: {
		textAlign: 'left',
		fontSize: 13,
		color: Colors.gray,
	}
});