import { CssBaseline } from "@mui/material";
import AppRouter from "./routes/AppRouter";
import AppSnackbar from "./components/AppSnackbar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppSnackbar />
      <AppRouter />
    </>
  )
}

export default App;