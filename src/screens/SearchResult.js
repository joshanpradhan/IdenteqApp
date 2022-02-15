import React, { useState } from "react";
import {
	TouchableOpacity,
	Dimensions,
	ImageBackground,
	View,
	StyleSheet,
	FlatList,
	ScrollView,
} from "react-native";
import * as theme from "constants/theme.js";
import { Text, Button, Empty } from "components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { TakePhotoIconComponent } from "assets/icons/Index.js";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const numColumns = 3;
const formatData = (data, numColumns) => {
	const numberOfFullRows = Math.floor(data.length / numColumns);
	let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
	while (
		numberOfElementsLastRow !== numColumns &&
		numberOfElementsLastRow !== 0
	) {
		data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
		numberOfElementsLastRow++;
	}
	return data;
};
const Images = [
	{
		id: "1",
		imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		id: "2",
		imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		id: "3",
		imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		id: "4",
		imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		id: "5",
		imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		id: "6",
		imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		id: "7",
		imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		id: "8",
		imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
	},
];
const SearchResult = ({ navigation }) => {
	const renderItem = ({ item, index }) => {
		if (item.empty === true) {
			return (
				<View style={styles.gridImageOuterContainer}>
					<View
						style={{
							padding: "8%",
						}}
					/>
				</View>
			);
		}
		return (
			<View style={styles.gridImageOuterContainer}>
				<View style={styles.gridImageInnerContainer}>
					<ImageBackground
						style={styles.gridImage}
						source={{
							uri:
								"https://randomuser.me/api/portraits/men/22.jpg",
						}}
					>
						<View
							style={[
								styles.textOverImageContainer,
								{
									marginTop: "8%",
									marginLeft: "8%",
									width: "30%",
								},
							]}
						>
							<Text
								center
								style={[
									styles.textOverImage,
									{
										fontSize: 8,
									},
								]}
							>
								99%
							</Text>
						</View>
					</ImageBackground>
					<View style={{ paddingVertical: "4%" }} />
					<Text numberOfLines={1} style={{ fontSize: 10 }}>
						Binita KC
					</Text>
				</View>
			</View>
		);
	};
	return (
		<>
			<View style={styles.container}>
				<View style={styles.separator} />
				<View style={styles.imageContainer}>
					<ImageBackground
						style={styles.image}
						source={{
							uri:
								"https://randomuser.me/api/portraits/men/22.jpg",
						}}
					>
						<View
							style={[
								styles.textOverImageContainer,
								{
									marginTop: "4%",
									marginLeft: "4%",
									width: "22%",
								},
							]}
						>
							<Text
								center
								style={[
									styles.textOverImage,
									{
										fontSize: 12,
									},
								]}
							>
								100%
							</Text>
						</View>
					</ImageBackground>
				</View>
				{/*start detail info*/}
				<View style={styles.detailContainer}>
					<View style={styles.detailRowContainer}>
						<View style={styles.flex}>
							<Text
								style={[
									styles.detailText,
									{ paddingLeft: "30%" },
								]}
							>
								ID
							</Text>
						</View>
						<View style={styles.flex}>
							<Text numberOfLines={1} style={styles.detailText}>
								############
							</Text>
						</View>
					</View>
					<View
						style={[
							styles.detailRowContainer,
							{
								backgroundColor: "#EDEFFE",
							},
						]}
					>
						<View style={styles.flex}>
							<Text
								style={[
									styles.detailText,
									{ paddingLeft: "30%" },
								]}
							>
								Full Name
							</Text>
						</View>
						<View style={styles.flex}>
							<Text numberOfLines={1} style={styles.detailText}>
								############
							</Text>
						</View>
					</View>
					<View style={styles.detailRowContainer}>
						<View style={styles.flex}>
							<Text
								style={[
									styles.detailText,
									{ paddingLeft: "30%" },
								]}
							>
								Matched Profile ID
							</Text>
						</View>
						<View style={styles.flex}>
							<Text numberOfLines={1} style={styles.detailText}>
								############
							</Text>
						</View>
					</View>
					<View
						style={[
							styles.detailRowContainer,
							{
								backgroundColor: "#EDEFFE",
							},
						]}
					>
						<View style={styles.flex}>
							<Text
								style={[
									styles.detailText,
									{ paddingLeft: "30%" },
								]}
							>
								BBox
							</Text>
						</View>
						<View style={styles.flex}>
							<Text numberOfLines={1} style={styles.detailText}>
								############
							</Text>
						</View>
					</View>
					<View style={styles.detailRowContainer}>
						<View style={styles.flex}>
							<Text
								style={[
									styles.detailText,
									{ paddingLeft: "30%" },
								]}
							>
								Request ID
							</Text>
						</View>
						<View style={styles.flex}>
							<Text numberOfLines={1} style={styles.detailText}>
								############
							</Text>
						</View>
					</View>
					<View
						style={[
							styles.detailRowContainer,
							{
								backgroundColor: "#EDEFFE",
							},
						]}
					>
						<View style={styles.flex}>
							<Text
								style={[
									styles.detailText,
									{ paddingLeft: "30%" },
								]}
							>
								Face URL
							</Text>
						</View>
						<View style={styles.flex}>
							<Text numberOfLines={1} style={styles.detailText}>
								############
							</Text>
						</View>
					</View>
				</View>
				{/*end detail info*/}
			</View>

			{/*start image grid*/}
			<View style={{ paddingHorizontal: 4, flex: 1 }}>
				<FlatList
					data={formatData(Images, numColumns)}
					numColumns={numColumns}
					showsVerticalScrollIndicator={true}
					keyExtractor={(item) => {
						return item.id;
					}}
					ListEmptyComponent={<Empty marginTop={"0%"}/>}
					renderItem={renderItem}
				/>
			</View>
			{/*end image grid*/}
		</>
	);
};

export default SearchResult;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	separator: { paddingVertical: "2.5%" },
	takePhotoContainer: {
		alignItems: "center",
		paddingHorizontal: "20%",
		paddingVertical: "10%",
		borderStyle: "dashed",
		borderWidth: 1,
		borderRadius: 1,
	},
	imageContainer: { flexDirection: "row", justifyContent: "center" },
	image: {
		height: HEIGHT / 3.5,
		width: WIDTH - 200,
	},
	detailContainer: {
		paddingVertical: "6%",
	},
	detailRowContainer: {
		flexDirection: "row",
		paddingVertical: "2%",
	},
	detailText: {
		fontSize: 12,
	},
	flex: {
		flex: 1,
	},
	gridImageOuterContainer: {
		flex: 1,
		alignItems: "center",
		paddingVertical: "1%",
	},
	gridImageInnerContainer: {
		padding: "8%",
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 1.5,
	},
	gridImage: { height: 90, width: 90 },
	textOverImageContainer: {
		backgroundColor: "#0B569B",
		paddingVertical: 4,
		borderRadius: 2,
	},
	textOverImage: { color: "white" },
});
