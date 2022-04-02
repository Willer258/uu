import React, { createContext, useState } from "react";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes);
export default function Test() {
  const usernameState: any = useState(themes.dark);
  return (
    <ThemeContext.Provider value={usernameState}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props: any) {
  return (
    <div>
      <ThemedButton />
      <span className="material-icons ml-5">search</span>
    </div>
  );
}

function ThemedButton() {
  //   const theme = useContext(ThemeContext);

  return (
    <button

    //   style={{ background: theme.background, color: theme.foreground }}
    >
      Je suis stylé par le contexte de thème !
    </button>
  );
}

/*import { useContext, useState, createContext } from "react";

// Initialisation du contexte, en utilisant la forme attendue [valeur, fonction de modification]
const UserContext = createContext(["", () => {}]);

export default function Test() {
  // Création de l'état username contenant ['', fonction de modification]
  const usernameState: any = useState("");
  return (
    <UserContext.Provider value={usernameState}>
      <UserName />
      <UserNameInput />
    </UserContext.Provider>
  );
}

function UserName() {
  // Récupération de la valeur du contexte
  const username = useContext(UserContext);
  return <span className="mr-5">{username}</span>;
}

function UserNameInput() {
  // Récupération de la fonction de modification
  const [username, setUsername]: any = useContext(UserContext);
  const handleInput = (event: any) => setUsername(event.target.value);
  return <input type="text" value={username} onChange={handleInput} />;
}
*/
