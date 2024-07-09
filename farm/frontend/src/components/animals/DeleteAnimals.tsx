import { useEffect } from "react";
import { Button } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDeleteAnimalMutation } from "../../api/Animals";
import { useSnackbar } from "notistack";
import DialogCustom from "../dialog/DialogCustom";

interface Props {
  open: boolean;
  handleClose: () => void;
  id: string;
}
export default function DeleteAnimals({ open, id, handleClose }: Props) {
  const [deleteTask, { isLoading, isSuccess }] = useDeleteAnimalMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar("Task successfully deleted", { variant: "success" });
      handleClose();
    }
  }, [isSuccess]);

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <>
      <DialogCustom open={open} handleClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Animal Delete"}</DialogTitle>
        <DialogContent>Are you sure ?</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleDelete}
            autoFocus
            variant="contained"
            color="error"
            disabled={isLoading}
          >
            Delete
          </Button>
        </DialogActions>
      </DialogCustom>
    </>
  );
}
