import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { usePickHausResume } from "../hooks/usePickHausResume";

const ContractDataProvider = ({ children }) => {
  const { account } = useWeb3React();
  const { fetchOwner, fetchPaused } = usePickHausResume();
  useEffect(() => {
    if (account) {
      fetchOwner();
      fetchPaused();
    }
  });
  return <>{children}</>;
};

export default ContractDataProvider;
