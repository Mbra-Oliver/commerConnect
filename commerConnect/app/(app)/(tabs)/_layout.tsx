import { Tabs } from "expo-router";
import { AntDesign, Feather, Fontisto, Entypo } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          headerShown:false
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="discovers/index"
        options={{
          title: "Découvrir",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Fontisto name="world-o" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="cart/index"
        options={{
          title: "Mon Panier",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="shops/index"
        options={{
          title: "Nouveautés",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Entypo name="new" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};
export default TabsLayout;
