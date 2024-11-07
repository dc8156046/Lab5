import { StyleSheet, Text, View, Button } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
    if (!taskText) {
      return;
    }
    if (tasks.filter((task) => task === taskText).length > 0) {
      alert("Task already exists");
    } else {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.subtitle}>To Do List</Text>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={addTask} />
          <Button
            title="Go to About"
            style={styles.button}
            onPress={() => navigation.navigate("About")}
          />
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  main: {
    justifyContent: "center",
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
