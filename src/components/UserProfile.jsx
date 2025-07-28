import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const UserProfile = () => {
  const { addUser, currentTheme, toggleTheme, settings, updateSettings } =
    useAppContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const themeStyles = {
    light: {
      backgroundColor: "#f9f9f9",
      color: "#333333",
      border: "1px solid #ddd",
    },
    dark: {
      backgroundColor: "#444444",
      color: "#ffffff",
      border: "1px solid #666",
    },
  };

  const containerStyles = {
    ...themeStyles[currentTheme],
    padding: "20px",
    borderRadius: "8px",
    margin: "20px 0",
  };

  const inputStyles = {
    ...themeStyles[currentTheme],
    padding: "8px",
    margin: "5px 0",
    borderRadius: "4px",
    width: "100%",
    fontSize: "14px",
  };

  const buttonStyles = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "5px",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      addUser(formData);
      setFormData({ name: "", email: "" });
      alert("Користувача додано успішно!");
    } else {
      alert("Будь ласка, заповніть всі поля");
    }
  };

  const handleSettingsChange = (setting, value) => {
    updateSettings({ [setting]: value });
  };

  return (
    <div style={containerStyles}>
      <h2>Профіль користувача</h2>

      {/* Форма додавання користувача */}
      <form onSubmit={handleSubmit}>
        <h3>Додати нового користувача</h3>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ім'я користувача"
            value={formData.name}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            style={inputStyles}
          />
        </div>
        <button type="submit" style={buttonStyles}>
          Додати користувача
        </button>
      </form>

      {/* Налаштування теми */}
      <div style={{ marginTop: "20px" }}>
        <h3>Налаштування</h3>
        <div style={{ margin: "10px 0" }}>
          <button
            onClick={toggleTheme}
            style={{
              ...buttonStyles,
              backgroundColor: currentTheme === "light" ? "#333" : "#fff",
              color: currentTheme === "light" ? "#fff" : "#333",
            }}
          >
            Поточна тема: {currentTheme === "light" ? "Світла" : "Темна"}
            (натисніть для зміни)
          </button>
        </div>

        {/* Інші налаштування */}
        <div style={{ margin: "10px 0" }}>
          <label style={{ display: "block", margin: "5px 0" }}>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) =>
                handleSettingsChange("notifications", e.target.checked)
              }
              style={{ marginRight: "8px" }}
            />
            Увімкнути сповіщення
          </label>

          <label style={{ display: "block", margin: "5px 0" }}>
            <input
              type="checkbox"
              checked={settings.autoSave}
              onChange={(e) =>
                handleSettingsChange("autoSave", e.target.checked)
              }
              style={{ marginRight: "8px" }}
            />
            Автоматичне збереження
          </label>

          <label style={{ display: "block", margin: "5px 0" }}>
            <span style={{ marginRight: "8px" }}>Мова:</span>
            <select
              value={settings.language}
              onChange={(e) => handleSettingsChange("language", e.target.value)}
              style={inputStyles}
            >
              <option value="uk">Українська</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </label>
        </div>
      </div>

      {/* Відображення поточних налаштувань */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: currentTheme === "light" ? "#e9e9e9" : "#555",
          borderRadius: "4px",
        }}
      >
        <h4>Поточні налаштування:</h4>
        <p>Сповіщення: {settings.notifications ? "Увімкнено" : "Вимкнено"}</p>
        <p>Автозбереження: {settings.autoSave ? "Увімкнено" : "Вимкнено"}</p>
        <p>Мова: {settings.language}</p>
      </div>
    </div>
  );
};

export default UserProfile;
