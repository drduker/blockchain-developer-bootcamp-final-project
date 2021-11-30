import MetamaskConnectButton from "./components/MetaMaskConnectButton";
import { injected } from "./connectors";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import ContractDataProvider from "./components/ContractDataProvider";
import { AppContextProvider } from "./AppContext";
import ContractDetails from "./components/ContractDetails";
import RequestResume from "./components/RequestResume";
import theme from "./config/theme";
import { ThemeProvider, CssBaseline, Box } from "@material-ui/core";

function App() {
  const { activate } = useWeb3React();
  useEffect(() => {
    activate(injected);
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <ContractDataProvider>
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={3}
            >
              <MetamaskConnectButton />
              <ContractDetails />
              <RequestResume />
            </Box>
          </ContractDataProvider>
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
