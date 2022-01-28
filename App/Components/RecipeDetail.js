import React, { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Linking,
	Image,
	SafeAreaView,
	ActivityIndicator } from 'react-native';

const categoryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const spaghettiURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52770';

export default function RecipeDetail(){
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState(false);

		useEffect(() => {
			fetch(spaghettiURL)
				.then((response) => response.json())
				.then((responseJson) => {
					let spaghetti = responseJson.meals[0];
					let ingredients = [];
					let measures = [];

					for (let i = 1; i <= 12; i++) {
						let ingredient = spaghetti["strIngredient" + i];
						let measure = spaghetti["strMeasure" + i];
						ingredients.push(ingredient);
						measures.push(measure);
					}

					console.log(ingredients.join("\n"));
					console.log(measures.join("\n"));

					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
				});
		})

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
		backgroundColor: '#66e39e',
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
		color: '#4f4f4f'
	}
});

/*useEffect(() => {
	fetch(categoryURL)
				.then((response) => response.json())
				.then((responseJson) => {
						//setLoading(false);
						setRecipes(responseJson.meals);
						console.log(recipes);
						console.log(recipes.length)
						let detailedRecipes = [];
							// for(let i = 0; i < recipes.length; i++) {
							//     let recipeId = recipes[i].idMeal;
							//     let recipeURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId.toString();
							//     return fetch(recipeURL)
							//     .then((response) => response.json())
							//     .then((responseJson) => {
							//         //setLoading(false);
							//         detailedRecipes.push()
							//         console.log("finished " + responseJson.meals[i].strMeal);
							//         //console.log(responseJson.meals);
							//     })
							//     .catch((error) => {
							//         console.error(error);
							//     });
							// }
							setRecipes(detailedRecipes);

					//   console.log(responseJson.meals);
				})
				.catch((error) => {
						console.error(error);
				});


	setLoading(false);

});*/


	/* (loading) {
		return (
			<View style={{flex: 1, paddingTop: 20, backgroundColor: 'orange'}}>
				<ActivityIndicator
					color = '#bc2b78'
					size = "large"
					style = {styles.activityIndicator}
				/>
			</View>
		);
	}

	return (
		<View style={{flex: 1, paddingTop:20, backgroundColor: 'red'}}>
			<FlatList
				data={recipes}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item}) => <View key={item.idMeal}>
					<Image
						style={{width: '100%', height: 250}}
						source={{uri: item.strMealThumb}}
					/>
					<Text
						style={styles.title}
						onPress={() => {console.log(item.strSource); Linking.openURL(item.strSource)}}
					>
						{item.strMeal}
					</Text>
				 </View>}
			 />
		</View>
	); */
