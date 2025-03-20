import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { clearRoutineDay } from "@/store/slices/routineSlice";
import { useTheme } from "@/contexts/ThemeContext";
import { i18n } from "@/contexts/LanguageContext";

export default function RutinaScreen() {
  const dispatch = useDispatch();
  const routineDays = useSelector((state: RootState) => state.routine);
  const { theme } = useTheme();
  const styles = theme === "dark" ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{i18n.t("routine_title")}</Text>
      <FlatList
        data={routineDays}
        keyExtractor={(item) => item.dayId.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titleDay}>{i18n.t("days")[item.dayId - 1]}</Text>

            {item.muscleGroup ? (
              <>
                <Text style={styles.titleMuscle}>{item.muscleGroup}</Text>
                {item.exercises.map((ex, index) => (
                  <Text key={index} style={styles.exerciseText}>
                    • {ex.name} ({ex.sets})
                  </Text>
                ))}
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => dispatch(clearRoutineDay(item.dayId))}
                >
                  <Text style={styles.deleteText}>{i18n.t("routine_deleteRoutine")}</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={styles.noRoutineText}>{i18n.t("routine_noRoutine")}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FA", padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#000" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  titleDay: { fontSize: 18, fontWeight: "bold", marginBottom: 4, color: "#000" },
  titleMuscle: { fontSize: 16, fontWeight: "600", marginBottom: 8, color: "#555" },
  exerciseText: { fontSize: 14, color: "#333", marginVertical: 2 },
  deleteButton: { backgroundColor: "red", padding: 10, marginTop: 10, borderRadius: 5 },
  deleteText: { color: "white", textAlign: "center" },
  noRoutineText: { fontSize: 14, color: "#888", textAlign: "center", marginTop: 10 },
});

const darkStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#222", padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#BB86FC" },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titleDay: { fontSize: 18, fontWeight: "bold", marginBottom: 4, color: "#BB86FC" },
  titleMuscle: { fontSize: 16, fontWeight: "600", marginBottom: 8, color: "#ccc" },
  exerciseText: { fontSize: 14, color: "#E0E0E0", marginVertical: 2 },
  deleteButton: { backgroundColor: "darkred", padding: 10, marginTop: 10, borderRadius: 5 },
  deleteText: { color: "white", textAlign: "center" },
  noRoutineText: { fontSize: 14, color: "#BBB", textAlign: "center", marginTop: 10 },
});
