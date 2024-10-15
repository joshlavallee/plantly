import { theme } from "@/theme";
import { StyleSheet, Text, Pressable, Platform } from "react-native";
import * as Haptrics from "expo-haptics";


type Props = {
    title: string;
    onPress: () => void;
};

export function PlantlyButton({ title, onPress }: Props) {
    const handlePress = () => {
        if (Platform.OS !== "web") {
            Haptrics.impactAsync(Haptrics.ImpactFeedbackStyle.Light);
        }

        onPress();
    }
    return (
        <Pressable onPress={handlePress} style={({ pressed }) => pressed ? [styles.button, styles.buttonPresed] : styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 6,
        backgroundColor: theme.colorGreen,
    },
    buttonPresed: {
        backgroundColor: theme.colorLeafyGreen,
    }
});
