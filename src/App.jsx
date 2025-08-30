import "./App.css";
import userData from "./data/userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./data/transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

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

        <FriendList friends={friends}/>

        <TransactionHistory transactions={transactions}/>
      </>
  );
}

export default App;
