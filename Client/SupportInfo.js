import React, { Component } from 'react';
import {
	TouchableOpacity,
	TextInput,
	StyleSheet,
	View,
	Text,
	Dimensions,ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

//https://snack.expo.io
export default class SupportInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
            <ScrollView>
            <View style={styles.center,[{padding:10,backgroundColor:'white',}]} >
            <View style={styles.mt1}>
				<Text>
                USCIS: 800-375-5283
                 </Text>
			</View>
            <View style={styles.mt1}>
                <Text>
                Consumer credit consulting service: 800-750-2227
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                Consumer complaint hotline: 800-952-5225
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                Legal Aid Foundation: 213-487-3320
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                APAC CPAF hotline: 800-339-3940
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                FEMA: 202-566-1600
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                American Red Cross: 213-739-5200
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                Domestic Violence Hotline: 800-799-7233
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                Elderly care assistance hotline: 800-843-5678
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                Malaria and neglect in children: 800-540-4000
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                Centre for missing and exploited children: 800-422-4453
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
                Child and family services: 213-427-2700
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
             
                </Text>
            </View>
			
			</View>
            </ScrollView>
			);
	}
}

const styles = StyleSheet.create({
	mt1:{
		marginTop:10
	},
	mt:{
		marginTop:20
	},
	in_bg:{
		width:310,
		height:50,
		backgroundColor:'white',color:'red',padding:5
	},
	input:{
		width:300,
		// height:50
	},
	add_btn:{
		width:300,
		backgroundColor:'#1E90FF',
		padding:10,
		marginTop:30,
		color:'#FFFFFF',
		fontSize:20,
		
		
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	md: {
		width: 200,
		height: 500
	},
	btn: {
		backgroundColor: 'white',
		width: 300,
		height: 30,
		borderRadius: 5,
		fontSize: 18,
		fontWeight: '500'
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
		
	}

})