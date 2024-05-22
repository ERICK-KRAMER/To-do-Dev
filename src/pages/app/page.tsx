import Joana from "../../../public/9439779.jpg"; 
import matheus from "../../../public/9720009.jpg";
import { Container } from "../../components/container/container";
import { Task } from "../../components/task/index";
import { Check, ChevronsRight } from "lucide-react";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TaskType {
  id: string;
  task: string;
  difficult: string;
  category: string;
  user: { id: string, name: string, image: string }[];
  completed: boolean;
  date: string;
}

const users = {
  Joana: { id: uuidv4(), image: Joana, name: 'Joana' },
  Matheus: { id: uuidv4(), image: matheus, name: 'Matheus' }
};

const AppTodo = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [inProgress, setInProgress] = useState<TaskType[]>([]);
  const [completed, setCompleted] = useState<TaskType[]>([]);
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');

  const taskRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const taskValue = taskRef.current?.value;
    
    const mouths = ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const date = new Date();
    const mouth = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    // check if values are null;
    if (taskValue && difficulty) {
      const newTask = {
        id: uuidv4(),
        task: taskValue.toUpperCase(),
        difficult: difficulty,
        category: category,
        date: `${mouths[mouth]} ${day}, ${year}`,
        user: [users.Matheus],
        completed: false
      };
    
      // adding task in state; 
      setTasks([...tasks, newTask]);


      // Clear inputs after adding the task;
      taskRef.current.value = '';
      setDifficulty('');
      setCategory('');
    }
  };

  const moveTaskToInProgress = (taskId: string) => {
    const taskToMove = tasks.find(task => task.id === taskId);
    if (taskToMove) {
      setTasks(tasks.filter(task => task.id !== taskId));
      setInProgress([...inProgress, taskToMove]);
    }
  };

  const moveTaskToCompleted = (taskId: string) => {
    const taskMoved = inProgress.find(task => task.id === taskId);
    if (taskMoved) {
      setInProgress(inProgress.filter(task => task.id !== taskId));
      setCompleted([...completed, taskMoved]);
    }
  }

  const handleCompletedTodo = (taskId: string) => {
    setCompleted(completed.filter(task => task.id !== taskId));
  };

  return (
    <div className="h-screen flex justify-center items-center gap-5 flex-wrap p-6">
      <div>
        <h1 className="text-6xl font-bold text-center p-4 text-white">TODO-DEV</h1>
        <Container title="Create Task">
          <Task.Root>
            <input type="text" className="border px-2 rounded outline-none py-2" placeholder="Task..." ref={taskRef} />
            <p className="indent-1 font-medium">Difficulty</p>
            <div className="flex gap-3">
              <button
                className={`px-4 py-1 rounded-3xl ${difficulty === 'Easy' ? 'bg-lime-300' : 'bg-gray-200'}`}
                onClick={() => setDifficulty('Easy')}
              >
                Easy
              </button>
              <button
                className={`px-4 py-1 rounded-3xl ${difficulty === 'Medium' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setDifficulty('Medium')}
              >
                Medium
              </button>
              <button
                className={`px-4 py-1 rounded-3xl ${difficulty === 'Hard' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setDifficulty('Hard')}
              >
                Hard
              </button>
            </div>
            <p className="indent-1 font-medium">Category</p>
            <div className="flex gap-3">
              <button
                className={`px-4 py-1 rounded-3xl ${category === 'Web' ? 'bg-violet-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setCategory('Web')}
              >
                Web
              </button>
              <button
                className={`px-4 py-1 rounded-3xl ${category === 'Mobile' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setCategory('Mobile')}
              >
                Mobile
              </button>
            </div>
            <button className="bg-blue-500 flex justify-center items-center rounded py-2 hover:bg-blue-600 transition duration-500 text-white" onClick={handleClick}>Enviar</button>
          </Task.Root>
        </Container>
      </div>

      <Container title="Todo">
        {tasks.map(task => (
          <Task.Root key={task.id}>
            <Task.Difficult difficult={task.difficult} />
            <Task.Todo todo={task.task} />
            <Task.Where>
              <Task.Task tesk={task.category} />
            </Task.Where>
            <Task.Date date={task.date} />
            {task.user.map(user => (
              <Task.User key={user.id} image={user.image} name={user.name} />
            ))}
            <span
              className="absolute right-3 bg-neutral-400 rounded-full p-1 top-2 cursor-pointer"
              onClick={() => moveTaskToInProgress(task.id)}>
              <ChevronsRight />
            </span>
          </Task.Root>
        ))}
      </Container>
      
      <Container title="In Progress">
        {inProgress.map(task => (
          <Task.Root key={task.id}>
            <Task.Difficult difficult={task.difficult} />
            <Task.Todo todo={task.task} />
            <Task.Where>
              <Task.Task tesk={task.category} />
            </Task.Where>
            <Task.Date date={task.date} />
            {task.user.map(user => (
              <Task.User key={user.id} image={user.image} name={user.name} />
            ))}
            <span
              className="absolute right-3 bg-neutral-400 rounded-full p-1 top-2 cursor-pointer"
              onClick={() => moveTaskToCompleted(task.id)}>
              <ChevronsRight />
            </span>
          </Task.Root>
        ))}
      </Container>
      
      <Container title="Completed">
        {completed.map(task => (
          <Task.Root key={task.id}>
            <Task.Difficult difficult={task.difficult} />
            <Task.Todo todo={task.task} />
            <Task.Where>
              <Task.Task tesk={task.category} />
            </Task.Where>
            <Task.Date date={task.date} />
            {task.user.map(user => (
              <Task.User key={user.id} image={user.image} name={user.name} />
            ))}
            <span
              className="absolute right-3 bg-neutral-400 rounded-full p-1 top-2 cursor-pointer"
              onClick={() => handleCompletedTodo(task.id)}>
              <Check className="text-green-500"/>
            </span>
          </Task.Root>
        ))}
      </Container>
    </div>
  )
}

export { AppTodo };