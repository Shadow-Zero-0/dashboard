import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          // palette values for light mode
          mycolor: {
            main:grey[800],
          },
        }
      : {
          // palette values for dark mode
          mycolor: {
            main:grey[500],
          },
        }),
  },
});

// context for color mode
// export const ColorModeContext = createContext({
//   toggleColorMode: () => {},
// });

// export const useMode = () => {
//   const [mode, setMode] = useState(
//     localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
//   );

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () =>
//         setMode((prev) => (prev === "light" ? "dark" : "light")),
//     }),
//     []
//   );

//   const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
//   return [theme, colorMode];
// };