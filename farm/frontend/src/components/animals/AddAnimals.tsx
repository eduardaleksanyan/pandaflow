import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DialogSave from "./DialogSave";
import { StyledBox } from "./styles";
const AddAnimals = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledBox>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          startIcon={<AddIcon />}
        >
          Add Animal
        </Button>
      </StyledBox>
      <DialogSave open={open} handleClose={handleClose} />
    </>
  );
}

export default React.memo(AddAnimals);