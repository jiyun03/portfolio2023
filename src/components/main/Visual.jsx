import { useTheme } from "../../theme/themeProvider";
import ThemeToggle from "../common/ThemeToggle";

function Visual() {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <>
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
        DarkMode
      </ThemeToggle>
    </>
  );
}

export default Visual;
