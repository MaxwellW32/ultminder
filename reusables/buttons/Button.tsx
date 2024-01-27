import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from 'react-native';
import { globalStyles } from '../../global/GlobalStyles';

export default function Button({ text, onPress, ...props }: { text: string, onPress?: (event: GestureResponderEvent) => void } & TouchableOpacityProps) {

    return (
        <TouchableOpacity activeOpacity={0.9} {...props} style={[globalStyles.button, props.style]} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
});
