import { useContext } from "react";
import { GlobalConfigContext } from "../context/globalConfigContext";

export const useGlobalSettings = () => {
    const context = useContext(GlobalConfigContext);
    if (!context) {
      throw new Error("useGlobalConfig need to be invoque in a GlobalConfigProvider");
    }
    return context;
  };