import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import FlashMessage from "react-native-flash-message";
import { FloatingButton, Text, Button } from "components/Index";
import * as theme from "constants/theme";
import DeleteModal from "./DeleteModal";
import { AddIconComponent } from "assets/icons/Index";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import moment from "moment";
import RBSheet from "react-native-raw-bottom-sheet";
import DateTimePicker from "@react-native-community/datetimepicker";
import OptionMenu from "./OptionMenu";

const dummyData = [
  {
    id: "10123244",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "1",
  },
  {
    id: "10123245",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Fast Search",
    date: 1635245759890,
    status: "2",
  },
  {
    id: "10123246",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Fast Search",
    date: 1635245759890,
    status: "3",
  },
  {
    id: "10123247",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "4",
  },
  {
    id: "10123248",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "2",
  },
  {
    id: "10123249",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "1",
  },
   {
    id: "10223246",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Fast Search",
    date: 1635245759890,
    status: "3",
  },
  {
    id: "10323247",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "4",
  },
  {
    id: "10423648",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "2",
  },
  {
    id: "10523749",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "1",
  },
   {
    id: "10223846",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Fast Search",
    date: 1635245759890,
    status: "3",
  },
  {
    id: "10323947",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "4",
  },
  {
    id: "10422248",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "2",
  },
  {
    id: "10521249",
    title: "Face Detection",
    userId: "User01",
    source: "URL",
    type: "Deep Search",
    date: 1635245759890,
    status: "1",
  },
];

const WIDTH = Dimensions.get("window").width;
const SearchRequest = ({ navigation }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [fromDate, setFromDate] = useState("2021-05-03T15:21:15.513Z");
  const [showFromDate, setShowFromDate] = useState(false);
  const [toDate, setToDate] = useState("2021-09-03T15:21:15.513Z");
  const [showToDate, setShowToDate] = useState(false);
  const [commonType, setCommonType] = useState("Select");
  const [commonTypeError, setCommonTypeError] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => refRBSheet.current.open()}
          style={styles.filterIcon}
        >
          <Ionicons name="filter-sharp" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const refRBSheet = useRef();

  const onChangeFromDate = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDate(Platform.OS === "ios");
    setFromDate(currentDate);
    setShowFromDate(false);
  };
  const onChangeToDate = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDate(Platform.OS === "ios");
    setToDate(currentDate);
    setShowToDate(false);
  };

  const onPressReset = () => {
    setFromDate("2021-05-03T15:21:15.513Z");
    setToDate("2021-09-03T15:21:15.513Z");
  };

  const handleTodayType = () => {
    setCommonType("Today");
    setCommonTypeError(false);
  };
  const handleYesterdayGenderType = () => {
    setCommonType("Yesterday");
    setCommonTypeError(false);
  };
  const handleWeekGenderType = () => {
    setCommonType("This week");
    setCommonTypeError(false);
  };

 const handleMonthGenderType = () => {
    setCommonType("This month");
    setCommonTypeError(false);
  };

 const handleYearGenderType = () => {
    setCommonType("This year");
    setCommonTypeError(false);
  };

  const rightSwipeItem = (progress, dragX, item) => {
    const scale = dragX.interpolate({
      inputRange: [-WIDTH, -120, -35],
      outputRange: [0, 1, 0],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          console.log("Joshan");
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: "2%",
          }}
        >
          <AntDesign name="delete" size={20} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("Search Result")}
        onLongPress={() => setDeleteModalVisible(true)}
        android_ripple={{
          color: "rgba(52, 52, 52, 0.2)",
          borderless: false,
        }}
        style={styles.itemOuterContainer}
        delayLongPress={500}
      >
        <View style={styles.itemFirstColumnContainer}>
          <View style={styles.itemFirstRowContainer}>
            <Text
              bold
              style={{ color: theme.colors.primary1 }}
              numberOfLines={1}
            >
              #{item.id}
            </Text>
            <View style={styles.statusContainer}>
              <Text
                light
                style={[
                  styles.statusText,
                  {
                    color:
                      item.status == 1
                        ? "#2234A8"
                        : item.status == 2
                        ? "#D18D26"
                        : item.status == 3
                        ? "#D93025"
                        : "#00923F",

                    backgroundColor:
                      item.status == 1
                        ? "#DCDFF1"
                        : item.status == 2
                        ? "#E9CFA9"
                        : item.status == 3
                        ? "#EDBEBB"
                        : "#C0D8CA",
                  },
                ]}
                numberOfLines={1}
              >
                {item.status == 1
                  ? "Running"
                  : item.status == 2
                  ? "Pending"
                  : item.status == 3
                  ? "Error"
                  : "Completed"}
              </Text>
            </View>
          </View>
          <View style={styles.itemFirstRowContainer}>
            <View style={{ flex: 1 }}>
              <Text small bold numberOfLines={1}>
                Title
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text small light numberOfLines={1}>
                {item.title}
              </Text>
            </View>
          </View>
          <View style={styles.itemFirstRowContainer}>
            <View style={{ flex: 1 }}>
              <Text small bold numberOfLines={1}>
                User ID
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text small light numberOfLines={1}>
                {item.userId}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.itemSecondColumnContainer}>
          <View style={styles.itemSecondRowContainer}>
            <Text small bold numberOfLines={1}>
              13th Dec 2020, 3:12 pm
            </Text>
          </View>
          <View style={styles.itemSecondRowContainer}>
            <View style={{ flex: 1 }}>
              <Text small bold numberOfLines={1}>
                Source
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text small light numberOfLines={1}>
                {item.source}
              </Text>
            </View>
          </View>
          <View style={styles.itemSecondRowContainer}>
            <View style={{ flex: 1 }}>
              <Text small bold numberOfLines={1}>
                Type
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text small light numberOfLines={1}>
                {item.type}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <View styles={styles.container}>
        <FlatList
          data={dummyData}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.itemSeparatorContainer}>
                <View style={styles.itemSeparator} />
              </View>
            );
          }}
          ListEmptyComponent={<Empty marginTop={"60%"} />}
          renderItem={renderItem}
        />
      </View>
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
            height: 300,
          },
          draggableIcon: {
            backgroundColor: "#E2E2E2",
          },
        }}
      >
        <View style={{ flex: 1, width: "100%", paddingHorizontal: 18 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingBottom: 8,
            }}
            onPress={onPressReset}
          >
            <Text
              bold
              style={{ fontSize: 14, fontWeight: "700" }}
              color={theme.colors.red}
            >
              Reset
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, paddingVertical: 8 }}>
              <Text bold style={{ fontSize: 14 }}>
                From
              </Text>
              <TouchableOpacity
                style={styles.customPicker}
                activeOpacity={0.8}
                onPress={() => setShowFromDate(true)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#999999",
                  }}
                >
                  {fromDate == "2021-05-03T15:21:15.513Z"
                    ? ""
                    : moment(fromDate).format("DD/MM/YYYY")}
                </Text>
                <View style={{ alignItems: "flex-end" }}>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={20}
                    color={theme.colors.primary1}
                  />
                </View>
              </TouchableOpacity>
              {showFromDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  maximumDate={new Date()}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  textColor="red"
                  onChange={onChangeFromDate}
                />
              )}
            </View>
            <View style={{ flex: 0.1 }} />

            <View style={{ flex: 1, paddingVertical: 8 }}>
              <Text bold style={{ fontSize: 14, fontWeight: "700" }}>
                To
              </Text>
              <TouchableOpacity
                style={styles.customPicker}
                activeOpacity={0.8}
                onPress={() => setShowToDate(true)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#999999",
                  }}
                >
                  {toDate == "2021-09-03T15:21:15.513Z"
                    ? ""
                    : moment(toDate).format("DD/MM/YYYY")}
                </Text>
                <View style={{ alignItems: "flex-end" }}>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={20}
                    color={theme.colors.primary1}
                  />
                </View>
              </TouchableOpacity>
              {showToDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  maximumDate={new Date()}
                  value={new Date()}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  textColor="red"
                  onChange={onChangeToDate}
                />
              )}
            </View>
          </View>

          <OptionMenu
            button={
              <Text
                style={{
                  color: "white",
                }}
              >
                Actions
              </Text>
            }
            destructiveIndex={1}
            options={["Today", "Yesterday", "This week","This month","This year"]}
            actions={[
              handleTodayType,
              handleYesterdayGenderType,
              handleWeekGenderType,
              handleMonthGenderType,
              handleYearGenderType
            ]}
            value={commonType}
            label="Commonly  use"
          />
          <View style={{paddingVertical:"2%"}}/>
          <Button  onPress={() => refRBSheet.current.close()}>
            <Text button style={{ fontSize: 18 }}>
              Apply
            </Text>
          </Button>
        </View>
      </RBSheet>
      {/*end actionsheet*/}
      <DeleteModal
        deleteModalVisible={deleteModalVisible}
        setDeleteModalVisible={setDeleteModalVisible}
      />
      <FloatingButton
        iconComponent={<AddIconComponent />}
        onPress={() => navigation.navigate("Search Profile")}
      />
    </>
  );
};

export default SearchRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: StatusBar.currentHeight,
  },
  itemOuterContainer: {
    flexDirection: "row",
    paddingHorizontal: "4%",
  },
  statusContainer: {
    paddingLeft: "6%",
    alignItems: "center",
  },
  statusText: {
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
  },
  itemFirstColumnContainer: {
    flex: 1.3,
    flexDirection: "column",
  },
  itemSecondColumnContainer: {
    flex: 1,
    flexDirection: "column",
  },
  itemFirstRowContainer: {
    flexDirection: "row",
    paddingVertical: "1%",
  },
  itemSecondRowContainer: {
    flexDirection: "row",
    paddingVertical: "1.8%",
  },
  itemSeparatorContainer: {
    paddingVertical: "1%",
  },
  itemSeparator: {
    borderColor: "#E4E4E4",
    borderWidth: 0.5,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 6,
    flex: 0,
    paddingVertical: 50,
    paddingHorizontal: 80,
    borderColor: "#D9D9D9",
  },
  customPicker: {
    height: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#E7E7E7",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
  filterIcon: {
    alignItems: "flex-end",
    marginRight: 16,
    justifyContent: "center",
  },
});
