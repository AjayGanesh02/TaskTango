import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BellIcon, UserGroupIcon, ChartBarIcon, UserCircleIcon, QrCodeIcon } from "react-native-heroicons/outline";

const Footer = ({navigation}) => {
	return (
		<View className={"bg-[#EDF7DE]"}>
			<SafeAreaView className={"flex-row justify-around mt-3 -mb-4"}>
				<TouchableOpacity
					className={"flex-col items-center"}
					onPress={() => navigation.navigate('alerts')}>
					<BellIcon className={"justify-center"} color="#333333" size = "30"/>
					<Text>Alerts</Text>
				</TouchableOpacity>
				<TouchableOpacity className={"flex-col items-center"}>
					<UserGroupIcon color="#333333" size = "30" />
					<Text>Groups</Text>
				</TouchableOpacity>
				<View>
					<TouchableOpacity className={"bottom-7 rounded-xl bg-[#C8E79D] shadow-xl p-3.5"}>
						<QrCodeIcon color="#333333" size = "50"/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity className={"flex-col items-center"}>
					<ChartBarIcon color="#333333" size = "30"/>
					<Text>Activity</Text>
				</TouchableOpacity>
				<TouchableOpacity className={"flex-col items-center"}>
					<UserCircleIcon color="#333333" size = "30" />
					<Text>Profile</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	);
};

export default Footer;
