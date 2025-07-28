import { AppProvider, useAppContext } from "./context/AppContext";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import "./App.css";

// Головний компонент додатку
function AppContent() {
  const { currentTheme, users } = useAppContext();

  const appStyles = {
    light: {
      backgroundColor: "#ffffff",
      color: "#333333",
      minHeight: "100vh",
      transition: "all 0.3s ease",
    },
    dark: {
      backgroundColor: "#222222",
      color: "#ffffff",
      minHeight: "100vh",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={appStyles[currentTheme]}>
      <header
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: `2px solid ${
            currentTheme === "light" ? "#ddd" : "#555"
          }`,
        }}
      >
        <h1>React Context Demo</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
            fontSize: "14px",
            opacity: "0.7",
          }}
        >
          <span>👥 Користувачів: {users.length}</span>
          <span>🎨 Тема: {currentTheme === "light" ? "Світла" : "Темна"}</span>
        </div>
      </header>

      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <section>
          <UserProfile />
        </section>

        <section>
          <UserList />
        </section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          borderTop: `1px solid ${currentTheme === "light" ? "#ddd" : "#555"}`,
          marginTop: "40px",
        }}
      >
        <p style={{ opacity: "0.6", fontSize: "14px" }}>
           React Context Demo • 2025
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
