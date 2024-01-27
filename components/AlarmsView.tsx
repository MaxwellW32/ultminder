import { ReactNode, useState } from 'react';
import { View, ViewProps, StyleProp, ViewStyle, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../global/GlobalStyles';

export default function AlarmsView({ style, ...props }: {} & ViewProps) {

    return (
        <View {...props} style={[{}, style]}>
            <Text>alarms</Text>
        </View>
    );
}


const styles = StyleSheet.create({
});
