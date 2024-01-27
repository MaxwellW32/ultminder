import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useColorScheme, View, } from 'react-native';
import RandColorView from './components/RandColorView';
import RemindersView from './components/RemindersView';
import AlarmsView from './components/AlarmsView';
import { globalStyles } from './global/GlobalStyles';
import MakeAlarm from './components/MakeAlarm';
import Button from './reusables/buttons/Button';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


export default function App(): React.JSX.Element {
  const [screen, screenSet] = useState<"alarms" | "reminders">("alarms")
  const [makingNew, makingNewSet] = useState<"alarm" | "reminder">()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#222" }}><StatusBar backgroundColor={"#000"} />
      <View style={{ flexDirection: "row" }}>
        <Button style={{ backgroundColor: screen === "alarms" ? "yellow" : "#fff", flex: 1, borderRadius: 0 }} text='Alarms' onPress={() => screenSet("alarms")} />

        <Button style={{ backgroundColor: screen === "reminders" ? "yellow" : "#fff", flex: 1, borderRadius: 0 }} text='Reminders' onPress={() => screenSet("reminders")} />
      </View>

      <Button style={globalStyles.addButton} text={`Add ${screen === "alarms" ? "Alarm" : "Reminder"}`}
        onPress={() => {
          if (screen === "alarms") {
            makingNewSet("alarm")
          } else {
            makingNewSet("reminder")
          }
        }} />

      {makingNew === "alarm" && <MakeAlarm makingNewSet={makingNewSet} />}

      <AlarmsView style={[styles.mainView, { display: screen === "alarms" ? "flex" : "none" }]} />

      <RemindersView style={[styles.mainView, { display: screen === "reminders" ? "flex" : "none" }]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 8,
    backgroundColor: "#eee",
  }
});
