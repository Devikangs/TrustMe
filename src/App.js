// import logo from "./logo.svg";
import "./App.css";
import trustme from "./icons/TrustMe.svg";
// import Stack from "@mui/material/Stack";
import { Flex, Button, Spacer, Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex alignItems="center" minHeight="30vh">
        <img src={trustme} className="App-logo" alt="logo" />
        <Spacer />
        <Box>
          <Button
            backgroundColor="#5EAEA5"
            color="white"
            size="md"
            padding="3vh"
            margin={2}
            borderRadius="20px"
          >
            Login
          </Button>
          <Button
            backgroundColor="#5EAEA5"
            color="white"
            size="md"
            padding="3vh"
            margin={2}
            borderRadius="20px"
          >
            Signup
          </Button>
        </Box>
      </Flex>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum
          varius sit amet mattis vulputate enim nulla. Metus dictum at tempor
          commodo. Ultrices mi tempus imperdiet nulla malesuada pellentesque
          elit eget. Nulla aliquet porttitor lacus luctus accumsan. Gravida
          neque convallis a cras semper. Ultrices eros in cursus turpis massa
          tincidunt dui. Tellus at urna condimentum mattis. Netus et malesuada
          fames ac turpis egestas sed. Quam elementum pulvinar etiam non quam
          lacus suspendisse. Massa tincidunt nunc pulvinar sapien et. Felis
          imperdiet proin fermentum leo.
        </p>
        <br />
        <br />
        <p>
          Eget nullam non nisi est sit. Pharetra magna ac placerat vestibulum
          lectus mauris ultrices eros in. Sagittis eu volutpat odio facilisis
          mauris sit amet massa. Suspendisse faucibus interdum posuere lorem
          ipsum dolor. Volutpat commodo sed egestas egestas fringilla phasellus.
          Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam. Lacus vestibulum sed arcu non. Sit amet cursus sit amet dictum
          sit amet justo donec. Quam pellentesque nec nam aliquam sem. Enim eu
          turpis egestas pretium. Accumsan in nisl nisi scelerisque eu ultrices
          vitae. Mi sit amet mauris commodo quis imperdiet massa tincidunt.
          Congue quisque egestas diam in arcu cursus euismod quis. Augue
          interdum velit euismod in pellentesque massa placerat duis. Vel
          fringilla est ullamcorper eget nulla. Nunc mi ipsum faucibus vitae
          aliquet nec ullamcorper sit. Iaculis eu non diam phasellus.
        </p>
      </div>
    </div>
  );
}

export default App;
