import React, { useEffect, useState } from "react";

// Material UI components
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

// Icons:
import DeleteIcon from "@mui/icons-material/Delete";

// Custom Components:
import PrimaryTodoInput from "./PrimaryTodoInput";
import { ListItemButton } from "@mui/material";

interface ITask {
    textContent: string;
    done: boolean;
}

export default function PrimaryTodo() {
    //const [inputError, setInputError];

    const [newTaskTextContent, setNewTaskTextContent] = useState("");
    const [inputError, setInputError] = useState("");
    const [tasksArray, setTasksArray] = useState<ITask[]>(() => {
        const storedTasksArray = localStorage.getItem("tasksArray");
        if (storedTasksArray) {
            return JSON.parse(storedTasksArray);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    }, [tasksArray]);

    // TODO: Rename this to newTaskTextInputChange
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: This has a "code smell"
        const newTaskTextInput = event.target.value;
        if (newTaskTextInput.trim()) {
            setInputError("");
        }
        setNewTaskTextContent(newTaskTextInput);
    };

    const todoSubmit = () => {
        /*
        if (event) {
            event.preventDefault();
        }
        */
        if (newTaskTextContent.trim()) {
            const newTask: ITask = {
                textContent: newTaskTextContent,
                done: false,
            };
            setTasksArray([newTask, ...tasksArray]);
            setNewTaskTextContent("");
        } else {
            setInputError("Please enter a task");
        }
    };

    const handleDelete = (index: number) => {
        setTasksArray(tasksArray.filter((_, i) => i !== index));
    };

    const handleTaskStatusChange = (
        // event: React.ChangeEvent<HTMLInputElement>
        toggledTaskIndex: number
    ) => {
        const newTasksArray = [...tasksArray];
        newTasksArray[toggledTaskIndex].done =
            !newTasksArray[toggledTaskIndex].done;

        setTasksArray(newTasksArray);

        return true;
    };

    const todoInputProps = {
        newTaskTextContent,
        inputError,
        inputChange,
        todoSubmit,
    };

    return (
        <List>
            {/* Input */}
            <PrimaryTodoInput {...todoInputProps} />
            {/**
             * Primary Iteration
             * I opted not to make this its own component for now (to avoid depth redundancy)
             * */}
            {tasksArray.map((task, index) => (
                <ListItem
                    key={index}
                    disableGutters
                    secondaryAction={
                        <IconButton
                            edge="end"
                            aria-label={`delete todo item ${index + 1}`}
                            role="button"
                            onClick={() => handleDelete(index)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemButton
                        onClick={() => handleTaskStatusChange(index)}
                    >
                        <ListItemIcon>
                            <Checkbox
                                key={`task-checkbox-${index}`}
                                inputProps={{
                                    // Maybe this could be aria-labelledby and point to the ListItemText?
                                    "aria-label": `mark task ${
                                        index + 1
                                    } complete`,
                                }}
                                color="secondary"
                                size="medium"
                                checked={tasksArray[index].done}
                                name={`taskCheckbox:${index}`}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={task.textContent}
                            className={
                                tasksArray[index].done
                                    ? "task-completed"
                                    : "task-incomplete"
                            }
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}
