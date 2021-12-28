import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import DataStore from './store';
import * as Font from 'expo-font';

const App = () => {
	const [isLoaded, setisLoaded] = useState(false);

	const _cacheResourcesAsync = () => {
		const images = [require('./assets/bg/splash.png')];

		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});
		return Promise.all(cacheImages);
	};

	const fetchFonts = () => {
		return Font.loadAsync({
			montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
			'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
		});
	};

	useEffect(() => {
		const getAsyncData = async () => {
			// Do my async request
			const fontsFetched = await fetchFonts();
			const response = await _cacheResourcesAsync();
			if (response) {
				setisLoaded(true);
			}
		};
		getAsyncData();
	}, []);

	if (!isLoaded) {
		return <AppLoading></AppLoading>;
	}

	return (
		<Provider store={DataStore}>
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		</Provider>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
