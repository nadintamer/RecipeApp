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

export default function RecipeDetail(){
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState(false);

		return (
			<SafeAreaView style={styles.container}>
				<Image style={styles.image} source={{uri: "https:\/\/www.themealdb.com\/images\/media\/meals\/wvpsxx1468256321.jpg"}} />
				<Text style={styles.title}>Teriyaki Chicken Casserole</Text>
				<Text style={styles.paragraph}>{decode("Preheat oven to 350\u00b0 F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, \u00bd cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!")}</Text>
			</SafeAreaView>
		)
  }


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	image: {
		flex: 1,
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
  	marginBottom: 10,
  },
	paragraph: {
		flex: 1,
		textAlign: 'left',
		fontSize: 12,
		margin: 5,
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
