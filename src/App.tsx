import { AppTodo } from "./pages/app/page";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { FormComponent } from "./pages/login/formLogin";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // const { isAuthenticated } = useContext(AuthContext);
  const isAuthenticated = false;
  return isAuthenticated ? children : <FormComponent />;
}

export default function App() {
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