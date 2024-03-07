import React from "react";

// material-ui (mui) components
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Custom Components:
import PrimaryHeaderBar from "./components/PrimaryHeaderBar";
import PrimaryTodo from "./components/PrimaryTodo";

export default function App() {
    return (
        <React.Fragment>
            <PrimaryHeaderBar />
            <Container
                component="main"
                maxWidth="md"
                sx={{ mb: 4, p: { xs: 2, md: 4 } }}
            >
                <Paper
                    elevation={1}
                    sx={{ my: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        fontWeight="400"
                        align="center"
                        sx={{ mt: 2 }}
                    >
                        To-do
                    </Typography>
                    <PrimaryTodo />
                </Paper>
            </Container>
        </React.Fragment>
    );
}
