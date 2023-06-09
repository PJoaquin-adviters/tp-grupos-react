import { Children, createContext, useState } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [cuenta, setCuenta] = useState(null);

  const abrirSesion = (user) => {
    setCuenta(user);
  };

  const cerrarSesion = () => {
    setCuenta(null);
  };

  return (
    <LoginContext.Provider value={{ cuenta, cerrarSesion, abrirSesion }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
