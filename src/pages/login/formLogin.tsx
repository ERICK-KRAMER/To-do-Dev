import Female from "../../../public/9439779.jpg"
import Male from "../../../public/9720009.jpg"

const FormComponent = () => {
  return (
    <form className="h-screen flex justify-center items-center flex-col gap-6">
      <h1 className="text-white text-6xl">Todo-Dev</h1>
      <div className="flex flex-col gap-10">
        <input type="text" placeholder="Digite seu nome..." className="h-10 px-2 rounded outline-none font-medium"/>
        <div className="flex gap-10 justify-center items-center">
          <span className="flex justify-center items-center flex-col gap-2 ">
            <p className="text-white">MALE</p>
            <img src={Male} alt="avatarIcon" className="w-40 rounded-full cursor-pointer" />
          </span>
          <span className="flex justify-center items-center flex-col gap-2 ">
            <p className="text-white">FEMALE</p>
            <img src={Female} alt="avatarIcon" className="w-40 rounded-full cursor-pointer" />
          </span>
        </div>
        <button className="bg-blue-500 flex items-center justify-center rounded w-full h-10">Entrar</button>
      </div>
    </form>
  )
}

export { FormComponent };