import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme, lightActivated, darkActivated } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {lang.detail.lightActivated}

      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected */}
    </p>
  );
};
