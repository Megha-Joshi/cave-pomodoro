import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {
    db
} from "../firebase-config";
import {collection, getDocs, doc, deleteDoc, updateDoc, addDoc} from "firebase/firestore";
import {
    useNavigate
} from "react-router-dom";

const TaskContext = createContext();

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();
    const [singleTask, setSingleTask] = useState({
        name: "",
        duration: 0,
        description: "",
        break: 0,
    })

    const taskCollectionRef = collection(db, "tasks");

    useEffect(() => {
        const getTasks = async () => {
            const data = await getDocs(taskCollectionRef);
            setTasks(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        };
        getTasks();

    }, []);

    const createTask = async () => {
        const docRef = await addDoc(taskCollectionRef, {
            name: singleTask.name,
            duration: singleTask.duration,
            description: singleTask.description,
            break: singleTask.break,
        });
        setTasks((val) => [
            ...val,
            {
                id: docRef.id,
                name: singleTask.name,
                duration: singleTask.duration,
                description: singleTask.description,
                break: singleTask.break,
            },
        ]);
        setSingleTask({
            name: "",
            duration: "",
            description: "",
            break: "",
        });
    };

    const deleteTask = async (id) => {
        const selectedDocRef = doc(db, "tasks", id);
        await deleteDoc(selectedDocRef);
        const tasksAfterDelete = tasks.filter((task) => task.id !== id);
        setTasks(tasksAfterDelete);
    };

    const editTask = async (id) => {
        const selectedDocRef = doc(db, "tasks", id);
        const dataToUpdate = {
            name: singleTask.name,
            duration: singleTask.duration,
            description: singleTask.description,
            break: singleTask.break,
        };
        await updateDoc(selectedDocRef, dataToUpdate);
        const tasksAfterUpdate = tasks.map((item) => item.id === id ? {
            ...singleTask,
            id: id,
            updatedOn: new Date()
        } : item);
        setTasks(tasksAfterUpdate);
        setEditing(false);
        setSingleTask({
            name: "",
            duration: "",
            description: "",
            break: "",
        });
        navigate("/home");
    };

    return <TaskContext.Provider value = {{
            tasks,
            setTasks,
            editing,
            setEditing,
            singleTask,
            setSingleTask,
            createTask,
            deleteTask,
            editTask
        }} > {children} </TaskContext.Provider>}

const useTask = () => useContext(TaskContext);

export {useTask, TaskProvider};