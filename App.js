import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigators/Index.js";
import FlashMessage from "react-native-flash-message";
import AppLoading from "expo-app-loading";
import useFonts from 'utility/useFonts';
import { showMessage } from "react-native-flash-message";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => console.log("App loading error")}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" translucent={true} />
          <Navigation/>
          <FlashMessage
            position="top"
            icon={{
              icon: "auto",
               // position: "right"
             }}
            style={{
              // justifyContent: "center",
              alignItems: "center",
              top: StatusBar.currentHeight,
            }}
            duration={1500}
          />
    </SafeAreaProvider>
  );
}

// import React, { useRef } from "react";
// import { View, Button,Text } from "react-native";
// import RBSheet from "react-native-raw-bottom-sheet";
 
// export default function App() {
//   const refRBSheet = useRef();
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#000"
//       }}
//     >
//       <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
//       <RBSheet
//         ref={refRBSheet}
//         closeOnDragDown={true}
//         closeOnPressMask={false}
//         customStyles={{
//           wrapper: {
//             backgroundColor: "transparent",
//             borderRadius:10
//           },
//            container: {  borderRadius:10},
//           draggableIcon: {
//             backgroundColor: "#000"

//           }
//         }}
//       >
//         <Text>Joshan</Text>
//       </RBSheet>
//     </View>
//   );
// }