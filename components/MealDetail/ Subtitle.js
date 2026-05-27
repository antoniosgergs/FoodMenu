import {Text, View,StyleSheet} from "react-native";

function Subtitle({children  }) {
return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
);
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer:{
        marginHorizontal: 12 ,
        marginVertical: 4,
        padding:6,
        borderBottomColor: "#e083e0",
        borderBottomWidth: 2,
    },
    subtitle:{
        color: "#e083e0",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})