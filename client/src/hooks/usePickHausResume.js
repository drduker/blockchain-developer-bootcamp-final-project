import { useContract } from "./useContract";
import PICK_HAUS_ABI from "../static/abiJson";
import useIsValidNetwork from "./useIsValidNetwork";
import { useWeb3React } from "@web3-react/core";
import { useAppContext } from "../AppContext";

export const usePickHausResume = () => {
  const { account } = useWeb3React();
  const { isValidNetwork } = useIsValidNetwork();
  const secureCodeContractAddr = "0xe7995F40E063646A4F1a727EbCc838E2DDca8028";
  const contract = useContract(secureCodeContractAddr, PICK_HAUS_ABI);
  const {
    paused,
    setPaused,
    isOwner,
    setIsOwner,
    setTxnStatus,
  } = useAppContext();

  const requestResume = async () => {
    if (account && isValidNetwork) {
      try {
        setTxnStatus("LOADING");
        const txn = await contract.requestResume();
        await txn.wait(1);
        setTxnStatus("DONE");
      } catch (err) {
        setTxnStatus("ERROR");
      }
    }
  };
  const fetchPaused = () => {
    if (account && isValidNetwork) {
      contract
        .paused()
        .then((paused) => setPaused(paused))
        .catch((e) => console.log(e));
    }
  };

  const fetchOwner = () => {
    if (account && isValidNetwork) {
      contract
        .owner()
        .then((owner) => setIsOwner(owner === account))
        .catch((error) => console.log(error));
    }
  };

  const pause = async () => {
    if (account && isValidNetwork) {
      try {
        setTxnStatus("LOADING");
        const txn = await contract.pause();
        await txn.wait(1);
        setPaused(true);
        setTxnStatus("DONE");
      } catch (err) {
        setTxnStatus("ERROR");
      }
    }
  };

  const unpause = async () => {
    if (account && isValidNetwork) {
      try {
        setTxnStatus("LOADING");
        const txn = await contract.unpause();
        await txn.wait(1);
        setPaused(false);
        setTxnStatus("DONE");
      } catch (err) {
        setTxnStatus("ERROR");
      }
    }
  };
  
  const mintNFT = async (to, uri) => {
    if (account && isValidNetwork) {
      try {
        setTxnStatus("LOADING");
        const txn = await contract.safeMint(to, uri);
        await txn.wait(1);
        setTxnStatus("DONE");
      } catch (err) {
        setTxnStatus("ERROR");
      }
    }
  };

  return {
    paused,
    requestResume,
    isOwner,
    pause,
    unpause,
    mintNFT,
    fetchOwner,
    fetchPaused,
    setPaused,
  };
};