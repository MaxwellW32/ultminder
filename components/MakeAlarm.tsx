import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../global/GlobalStyles';

export default function MakeAlarm({ makingNewSet }: { makingNewSet: React.Dispatch<React.SetStateAction<"alarm" | "reminder" | undefined>> }) {

    return (
        <View style={{ top: 0, left: 0, height: "100%", width: "100%", position: "absolute", zIndex: 10, backgroundColor: "blue", padding: 16 }}>
            <TouchableOpacity style={[globalStyles.button, { alignSelf: "flex-end" }]} onPress={() => makingNewSet(undefined)}><Text>Close</Text></TouchableOpacity>

            <Text>Making alarm</Text>
        </View>
    );
}


const styles = StyleSheet.create({
});
