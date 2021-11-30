import React from "react";
import { useWeb3React } from "@web3-react/core";
import MMLogo from "../static/metamask-logo.svg";
import { injected } from "../connectors";
import { shortenAddress } from "../utils/shortenAddress";
import { Button, Typography, Box } from "@material-ui/core";

const MetamaskConnectButton = () => {
  const { activate, active, account, deactivate } = useWeb3React();

  if (active) {
    return (
      <Box
        display="flex"
        flexDirection={"row"}
        alignContent={"center"}
        alignItems={"center"}
        justifyContent="space-between"
        width={300}
      >
        <img component={"img"} src={MMLogo} alt="MMLogo" />
        <Typography>{shortenAddress(account)}</Typography>
        <Button onClick={deactivate}>Log Out</Button>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      alignContent={"center"}
      alignItems={"center"}
      justifyContent="space-between"
      width={300}
    >
      <img src={MMLogo} alt="MMLogo" />
      <Typography>Metamask</Typography>
      <Button onClick={() => activate(injected)}>Connect</Button>
    </Box>
  );
};

export default MetamaskConnectButton;
