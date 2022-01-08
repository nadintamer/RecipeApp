import React, { useEffect, useState } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	FlatList,
	Linking,
	Image,
	ActivityIndicator } from 'react-native';

const categoryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

export default function RecipeDetail(){
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState(false); 

    
  useEffect(() => {
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
    
  });


  	if (loading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator
          	color = '#bc2b78'
            size = "large"
            style = {styles.activityIndicator}
          />
        </View>
      );
      }

    return (
      <View style={{flex: 1, paddingTop:20}}>
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
    );
  }


const styles = StyleSheet.create({
  activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
  },
  title: {
  	textAlign: 'center',
  	fontSize: 20,
  	height: 35,
  	marginBottom: 10
  }
});

// import { StyleSheet, Text, View, Image } from 'react-native';
// import React from "react";

// export default function RecipeDetail(props) {
//     return (
//         <View>
//             <Image source={require("../../assets/Images/falafel.png")} />
             
//             <Text>  </Text>
//         </View>);
// }
