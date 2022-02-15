import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import FlashMessage from "react-native-flash-message";
import { Text } from "components/Index";
import * as theme from "constants/theme";
import DeleteModal from "./DeleteModal";
import {
  UserIconComponent,
  EmailIconComponent,
  PhoneIconComponent,
  GenderIconComponent,
  ProfilePictureEditCameraIconComponent,
  ProfilePicturePlaceholderIconComponent,
  EditProfileIconComponent,
  SettingIconComponent,
  LogoutIconComponent,
} from "assets/icons/Index";
import * as ImagePicker from "expo-image-picker";
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState(true);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      // imageUpload(result.uri);
      setImage(result.uri);
      setImageError(false);
    }
  };
  const refRBSheet = useRef();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => refRBSheet.current.open()}
          style={styles.optionIcon}
        >
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      {/*starts profile picture*/}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.profilePictureContainer}
        onPress={pickImage}
      >
        {image !== "" ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <ProfilePicturePlaceholderIconComponent />
        )}
        <View style={styles.imageCameraContainer}>
          <ProfilePictureEditCameraIconComponent />
        </View>
      </TouchableOpacity>
      {/*ends profile picture*/}

      {/*starts profile details*/}
      <View style={styles.profileDetailContainer}>
        <View style={styles.profileDetailRow}>
          <View style={{ flex: 0.1 }}>
            <UserIconComponent />
          </View>
          <View style={styles.infoContainer}>
            <Text medium style={styles.text}>
              Name
            </Text>
            <Text
              medium
              style={[styles.text, { color: "black" }]}
              numberOfLines={1}
            >
              Arjan Dongol
            </Text>
          </View>
        </View>
        <View style={styles.profileDetailRow}>
          <View style={{ flex: 0.1 }}>
            <EmailIconComponent />
          </View>
          <View style={styles.infoContainer}>
            <Text medium style={styles.text}>
              Email
            </Text>
            <Text
              medium
              style={[styles.text, { color: "black" }]}
              numberOfLines={1}
            >
              Add Email
            </Text>
          </View>
        </View>
        <View style={styles.profileDetailRow}>
          <View style={{ flex: 0.1 }}>
            <PhoneIconComponent />
          </View>
          <View style={styles.infoContainer}>
            <Text medium style={styles.text}>
              Phone Number
            </Text>
            <Text
              medium
              style={[styles.text, { color: "black" }]}
              numberOfLines={1}
            >
              01-4275432
            </Text>
          </View>
        </View>
        <View style={styles.profileDetailRow}>
          <View style={{ flex: 0.1 }}>
            <GenderIconComponent />
          </View>
          <View style={styles.infoContainer}>
            <Text medium style={styles.text}>
              Gender
            </Text>
            <Text
              medium
              style={[styles.text, { color: "black" }]}
              numberOfLines={1}
            >
              Male
            </Text>
          </View>
        </View>
      </View>
      {/*ends profile details*/}

      {/*starts actionsheet*/}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 180,
          },
          draggableIcon: {
            backgroundColor: "#E2E2E2",
          },
        }}
      >
        <View style={{ paddingHorizontal: 18 }}>
          <View style={{ flexDirection: "row", paddingVertical: "2%" }}>
            <View style={{ flex: 0.1 }}>
              <EditProfileIconComponent />
            </View>
            <TouchableOpacity style={{ flex: 0.8 }} activeOpacity={0.8} onPress={()=>{
              refRBSheet.current.close()
              navigation.navigate("Edit Profile")
            }}>
              <Text bold style={styles.text}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: "2%" }}>
            <View style={{ flex: 0.1 }}>
              <SettingIconComponent />
            </View>
            <TouchableOpacity style={{ flex: 0.8 }} activeOpacity={0.8} onPress={()=>{
              refRBSheet.current.close()
              navigation.navigate("Edit Profile")
            }}>
              <Text bold style={styles.text}>
                Settings
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: "2%" }}>
            <View style={{ flex: 0.1 }}>
              <LogoutIconComponent />
            </View>
            <TouchableOpacity style={{ flex: 0.8 }} activeOpacity={0.8} onPress={()=>{
              refRBSheet.current.close()
              navigation.navigate("Edit Profile")
            }}>
              <Text bold style={styles.text}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: StatusBar.currentHeight,
  },
  profilePictureContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#0F61EB",
  },
  imageCameraContainer: {
    position: "absolute",
    paddingLeft: "100%",
  },
  profileDetailContainer: {
    paddingVertical: "10%",
  },
  profileDetailRow: {
    flexDirection: "row",
    paddingHorizontal: "4%",
    paddingVertical: "3%",
  },
  infoContainer: {
    flex: 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { fontSize: 16 },
  optionIcon: {
    marginRight: 16,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
