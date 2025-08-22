import UserTopBar from "@/components/ui/topBar_Component";
import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerTitle: props => <UserTopBar user="Laura Narvaez"/>
        }}/>
    </Stack>
  )
}
