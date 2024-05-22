import { AppTodo } from "../pages/app/page";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { FormComponent } from "../pages/login/formLogin";
import { useAuth } from "../context/useContext";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <FormComponent />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" element={
          <PrivateRoute>
            <AppTodo />
          </PrivateRoute>
        } />
        <Route path="/" element={<FormComponent/>} />
        <Route path="*" element={<FormComponent/>} />
      </Switch>
    </BrowserRouter>
  )
}