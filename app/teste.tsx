import { ImageBackground, Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors"
import { AdMobBanner } from 'expo-ads-admob';
export default function Index() {

    return (
        <View>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-6400911604782344/6815725444" // Substitua com seu ID de unidade de anúncio
                servePersonalizedAds // Alternar para não anúncios personalizados
                onDidFailToReceiveAdWithError={(error) => console.error(error)}
            />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "auto",
        backgroundColor: "red"

    },
    image: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "auto",
        height: "100%"
    },
    button: {
        display: "flex",
        alignItems: "center",
        backgroundColor: 'blue',
        height: "auto",
        width: "35%",

        marginBottom: 100,
        padding: 15,
        borderRadius: 10


    }

})


