import { usePickHausResume } from "../hooks/usePickHausResume";
import useTransaction from "../hooks/useTransaction";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";

const RequestResume = () => {
  const { requestResume } = usePickHausResume();
  const { txnStatus } = useTransaction();

  const handleClick = () => {
    requestResume();
  };
  return (
    <>
      {txnStatus === "LOADING" ? (
        <CircularProgress />
      ) : (
        <>
          <Button onClick={handleClick}>Request My Resume</Button>
          <Snackbar
            open={txnStatus === "LOADING"}
            message="Waiting for Transaction to Finish"
            autoHideDuration={3000}
          />
          <Snackbar
            open={txnStatus === "DONE"}
            message="Transaction Complete"
            autoHideDuration={3000}
          />
        </>
      )}
    </>
  );
};

export default RequestResume;
