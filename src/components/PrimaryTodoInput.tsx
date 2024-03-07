import React from "react";
// We break this out if style guide rules cause word wrap!:
import {
    ListItem,
    IconButton,
    FormControl,
    TextField,
    InputAdornment,
} from "@mui/material";

// Icons:
import AddCircle from "@mui/icons-material/AddCircle";
import Description from "@mui/icons-material/Description";

// TODO: This needs to be cleaned up:
interface TodoInputProps {
    newTaskTextContent: string;
    inputError: string;
    inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todoSubmit: () => void;
}

// TODO: Change this to a sticky header
export default function PrimaryTodoInput({
    newTaskTextContent,
    inputError,
    inputChange,
    todoSubmit,
}: TodoInputProps) {
    return (
        <ListItem
            disableGutters
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="add todo item"
                    role="button"
                    onClick={todoSubmit}
                    sx={{ mt: -3 }}
                >
                    <AddCircle />
                </IconButton>
            }
        >
            <FormControl fullWidth id="input-new-task">
                {/*InputLabel html-for='input-new-task'>New Task</InputLabel */}
                <TextField
                    label="Add a new task here!"
                    onChange={inputChange}
                    value={newTaskTextContent}
                    error={inputError ? true : false}
                    helperText={
                        inputError ? inputError : "Pro-tip: Try pressing enter!"
                    }
                    onKeyDown={(e) => (e.key === "Enter" ? todoSubmit() : true)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Description />
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>
        </ListItem>
    );
}
