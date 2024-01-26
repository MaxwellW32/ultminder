import { ReactNode, useRef } from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';

export default function RandColorView({ children, style, ...props }: { children?: ReactNode } & ViewProps) {
    const randR = useRef(Math.floor(Math.random() * 256));
    const randG = useRef(Math.floor(Math.random() * 256));
    const randB = useRef(Math.floor(Math.random() * 256));

    // Merge styles
    const mergedStyle: StyleProp<ViewStyle> = [{ backgroundColor: `rgb(${randR.current},${randG.current},${randB.current})` }, style];

    return (
        <View {...props} style={mergedStyle}>
            {children}
        </View>
    );
}
