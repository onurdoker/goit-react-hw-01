import css from "./FriendList.module.css";

const FriendList = (friends) => {

  return (
      <div className={css.friendList}>
        <ul className={css.ul}>
          {friends.friends.map ((friend) => (
              <li className={css.item}
                  key={friend.id}>
                <img
                    className={css.image}
                    src={friend.avatar}
                    alt={friend.name}
                />
                <p className={css.name}>{friend.name}</p>
                <p style={{color: friend.isOnline ? "green" : "red"}}>{friend.isOnline ? "Online" : "Offline"}</p>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default FriendList;
