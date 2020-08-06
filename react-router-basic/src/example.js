import React from "react";
import { StyleSheet, Text, View } from "react-native";

//create-react-app reads routes/index.web.js.
//react-native reads routes/index.js
import { Router, Link, Route } from "./routes/";

function Home() {
  return <Text style={styles.header}>Home</Text>;
}

function About() {
  return <Text style={styles.header}>About</Text>;
}

function Topic({ match }) {
  return <Text style={styles.topic}>{match.params.topicId}</Text>;
}

function Topics({ match }) {
  return (
    <View>
      <Text style={styles.header}>Topics</Text>
      <View>
        <Link to={`${match.url}/rendering`} underlayColor="#f0f4f7">
          <Text>Rendering with React</Text>
        </Link>
        <Link to={`${match.url}/components`} underlayColor="#f0f4f7">
          <Text>Components</Text>
        </Link>
        <Link to={`${match.url}/props-v-state`} underlayColor="#f0f4f7">
          <Text>Props v. State</Text>
        </Link>
      </View>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <Text style={styles.topic}>Please select a topic.</Text>}
      />
    </View>
  );
}

function App() {
  return (
    <Router>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link
            to="/"
            underlayColor="#f0f4f7"
            style={{ flex: 1, alignItems: "center", padding: 10 }}
          >
            <Text>Home</Text>
          </Link>
          <Link
            to="/about"
            underlayColor="#f0f4f7"
            style={{ flex: 1, alignItems: "center", padding: 10 }}
          >
            <Text>About</Text>
          </Link>
          <Link
            to="/topics"
            underlayColor="#f0f4f7"
            style={{ flex: 1, alignItems: "center", padding: 10 }}
          >
            <Text>Topics</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
