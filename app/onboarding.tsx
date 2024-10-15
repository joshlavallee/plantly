import { StyleSheet, View, Text } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/PlantlyImage";

export default function OnboardingScreen() {
    const router = useRouter();
    const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded)

    const handlePress = () => {
        toggleHasOnboarded();
        router.replace("/");
    }

    return (
        <LinearGradient style={styles.container} colors={[theme.colorLeafyGreen, theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}>
            <StatusBar style="light" />
            <View>
                <Text style={styles.heading}>Plantly</Text>
                <Text style={styles.tagline}>Keep your plants healthy and hydrated!</Text>
            </View>
            <PlantlyImage />
            <PlantlyButton title="Let me in!" onPress={handlePress} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: theme.colorWhite,
    },
    heading: {
        fontSize: 42,
        fontWeight: "bold",
        color: theme.colorWhite,
        marginBottom: 12,
        textAlign: "center",
    },
    tagline: {
        fontSize: 24,
        color: theme.colorWhite,
        textAlign: "center",
        paddingHorizontal: 18,
    },
    text: {
        fontSize: 24,
    },
});