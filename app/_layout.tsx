import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // This removes the white bar with "index"
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
