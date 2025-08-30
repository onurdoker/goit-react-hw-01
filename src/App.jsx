import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";

function App() {
  return (
      <>
        <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
        />
      </>
  );
}

export default App;
