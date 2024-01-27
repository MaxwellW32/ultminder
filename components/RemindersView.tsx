import { ReactNode, useRef } from 'react';
import { View, ViewProps, StyleProp, ViewStyle, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RemindersView({ style, ...props }: {} & ViewProps) {

    return (
        <View {...props} style={[{}, style]}>
            <Text>reminders</Text>
        </View>
    );
}


const styles = StyleSheet.create({
});
