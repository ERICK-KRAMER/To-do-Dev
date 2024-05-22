import { useRef, useState } from "react";
import Female from "../../../public/9439779.jpg";
import Male from "../../../public/9720009.jpg";
import { useAuth } from "../../context/useContext";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const name = useRef<HTMLInputElement>(null);
  const [genre, setGenre] = useState<string>(""); 
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    const nameValue = name.current?.value;
    register({ name: String(nameValue), genre }); 
    navigate("/app");
  };

  return (
    <form className="h-screen flex justify-center items-center flex-col gap-6">
      <h1 className="text-white text-6xl">Todo-Dev</h1>
      <div className="flex flex-col gap-10">
        <input
          type="text"
          placeholder="Digite seu nome..."
          className="h-10 px-2 rounded outline-none font-medium"
          ref={name}
        />
        <div className="flex gap-10 justify-center items-center">
          <span
            className={`flex justify-center items-center flex-col gap-2 ${
              genre === "male" ? "border-2 border-green-500" : "border-2 border-gray-500"

            }`}
            onClick={() => setGenre("male")} 
          >
            <p className="text-white">MALE</p>
            <img
              src={Male}
              alt="avatarIcon"
              className="w-40 rounded-full cursor-pointer"
            />
          </span>
          <span
            className={`flex justify-center items-center flex-col gap-2 ${
              genre === "female" ? "border-2 border-green-500" : "border-2 border-gray-500"
            }`}
            onClick={() => setGenre("female")} 
          >
            <p className="text-white">FEMALE</p>
            <img
              src={Female}
              alt="avatarIcon"
              className="w-40 rounded-full cursor-pointer"
            />
          </span>
        </div>
        <button
          className="bg-blue-500 flex items-center justify-center rounded w-full h-10"
          onClick={handleRegister}
          disabled={!name.current?.value || !genre}
        >
          Entrar
        </button>
      </div>
    </form>
  );
};

export { FormComponent };
