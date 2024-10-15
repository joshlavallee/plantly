import { Link, Redirect, Tabs } from 'expo-router';
import { useUserStore } from '@/store/userStore';
import Entypo from "@expo/vector-icons/Entypo";
import Feather from '@expo/vector-icons/Feather';
import { theme } from '@/theme';
import { Pressable } from 'react-native';


export default function Layout() {
    const hasFinishedOnboarding = useUserStore(state => state.hasFinishedOnboarding);

    if (!hasFinishedOnboarding) {
        return <Redirect href="/onboarding" />
    }
    return hasFinishedOnboarding ?
        <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen, tabBarShowLabel: false }}>
            <Tabs.Screen name="(home)" options={
                {
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Entypo name="leaf" size={size} color={color} />,
                }}
            />
            <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ size, color }) => <Feather name="user" size={size} color={color} /> }} />
        </Tabs>
        : <Redirect href="/onboarding" />
}