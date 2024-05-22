import AppRoutes from "./routes/routes";
import { AuthProvider } from "./context/useContext";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}