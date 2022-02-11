import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../Themes/Colors';

export default function RecipeRow({ title, category, imageUrl }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }}/>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.lightTurquoise,
    borderRadius: 10,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
  categoryText: {
    color: Colors.gray,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    margin: 10,
    borderRadius: 10,
  },
});