import { usePickHausResume } from "../hooks/usePickHausResume";
import { Typography, Box } from "@material-ui/core";

const ContractDetails = () => {
  const { isOwner, paused } = usePickHausResume();
  return (
    <Box display='flex' flexDirection={'column'} alignItems={'center'} justifyContent='space-evenly' height={100} width={300}>
      <Typography>
        The contract is {paused ? "paused" : "NOT paused."}
      </Typography>
      <Typography>
        You are {isOwner ? "" : "NOT"} the owner of this contract.
      </Typography>
    </Box>
  );
};

export default ContractDetails;
