import { useAppContext } from "../context/AppContext";

const UserList = () => {
  const { users, removeUser, currentTheme } = useAppContext();

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      color: "#333333",
      border: "1px solid #ddd",
    },
    dark: {
      backgroundColor: "#333333",
      color: "#ffffff",
      border: "1px solid #555",
    },
  };

  const userItemStyles = {
    ...themeStyles[currentTheme],
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyles = {
    backgroundColor: "#ff4444",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "3px",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Список користувачів ({users.length})</h2>
      {users.length === 0 ? (
        <p>Немає користувачів</p>
      ) : (
        users.map((user) => (
          <div key={user.id} style={userItemStyles}>
            <div>
              <h3 style={{ margin: "0 0 5px 0" }}>{user.name}</h3>
              <p style={{ margin: "0", opacity: "0.7" }}>{user.email}</p>
              <small style={{ opacity: "0.5" }}>Тема: {user.theme}</small>
            </div>
            <button
              style={buttonStyles}
              onClick={() => removeUser(user.id)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#cc3333")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4444")}
            >
              Видалити
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
