import { theme } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home", headerRight: () => <Link href='/new' asChild><Pressable style={{ marginRight: 18 }} hitSlop={20}><Feather name="plus-circle" size={24} color={theme.colorGreen} /></Pressable></Link> }} />
            <Stack.Screen name="plants/[plantId]" options={{ title: "" }} />
        </Stack>
    )
}