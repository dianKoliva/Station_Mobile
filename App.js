import { Provider } from "react-redux";
import Main from "./src/Main";
import store from "./src/store";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
  DMSans_500Medium,
} from "@expo-google-fonts/dm-sans";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
    DMSans_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
