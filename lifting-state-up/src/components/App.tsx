import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MyAppBar from "./MyAppBar";

const App: React.FC = () => {
  return (
    <div>
      <MyAppBar />
      <Container maxWidth={false}>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App with TypeScript and Material UI
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default App;
