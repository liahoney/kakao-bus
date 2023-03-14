import { StatusBar } from "expo-status-bar";
import { SectionList } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BusInfo from "./src/BusInfo";
import { COLOR } from "./src/color";
import { busStop, getSections, getBusNumColorBytype } from "./src/data";

export default function App() {
  const sections = getSections(busStop.buses);

  const renderItem = ({ item: bus }) => {
    const numColor = getBusNumColorBytype(bus.type);
    return (
      <BusInfo
        isBookmarked={bus.isBookmarked}
        onPressBookmark={() => {}}
        num={bus.num}
        directionDescription={bus.directionDescription}
        numColor={numColor}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={{ flex: 1, width: "100%" }}
        sections={sections}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
