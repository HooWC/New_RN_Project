import React from 'react';
import { View, Button, Alert, StatusBar, StyleSheet } from 'react-native';

const MyButton = () => {
    const handlePress = () => {
        Alert.alert('Button Pressed');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
            <Button title="Press Me" onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyButton;