import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// Хук для використання контексту
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// Провайдер контексту
export const AppProvider = ({ children }) => {
  // Стан для списку користувачів
  const [users, setUsers] = useState([
    { id: 1, name: "Олексій", email: "alex@example.com", theme: "light" },
    { id: 2, name: "Марія", email: "maria@example.com", theme: "dark" },
    { id: 3, name: "Іван", email: "ivan@example.com", theme: "light" },
  ]);

  // Стан для поточної теми
  const [currentTheme, setCurrentTheme] = useState("light");

  // Стан для налаштувань
  const [settings, setSettings] = useState({
    language: "uk",
    notifications: true,
    autoSave: false,
  });

  // Функція для додавання нового користувача
  const addUser = (user) => {
    const newUser = {
      ...user,
      id: Date.now(),
      theme: currentTheme,
    };
    setUsers((prev) => [...prev, newUser]);
  };

  // Функція для видалення користувача
  const removeUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  // Функція для зміни теми
  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Функція для оновлення налаштувань
  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  // Значення контексту
  const contextValue = {
    users,
    currentTheme,
    settings,
    addUser,
    removeUser,
    toggleTheme,
    updateSettings,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
