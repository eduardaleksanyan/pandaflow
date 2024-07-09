import React, { useEffect } from "react";
import { Button, Stack } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Animal } from "../../types/Animals";
import RHFTextField from "../hook-form/RHFTextField";
import FormProvider from "../hook-form/FormProvider";
import { useCreateAnimalMutation } from "../../api/Animals";
import { useSnackbar } from "notistack";
import DialogCustom from "../dialog/DialogCustom";
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const defaultValues: Animal = {
  name: "",
};

const validationFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
});

export default function DialogSave({ open, handleClose }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [createTask, { isLoading, isSuccess, isError, error }] = useCreateAnimalMutation();

  const methods = useForm<Animal>({
    resolver: yupResolver(validationFormSchema),
    defaultValues,
  });

  useEffect(() => {
    if (isError) {
      let errorMessage = 'Server Side problem';
      if ('data' in (error as FetchBaseQueryError)) {
        const errData = (error as FetchBaseQueryError).data as { message?: string };
        errorMessage = errData?.message ?? errorMessage;
      }
      enqueueSnackbar(`Error: ${errorMessage}`, { variant: "error" });
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar(
        `Animal successfully Added`,
        { variant: "success" },
      );
      handleClose();
    }
  }, [isSuccess]);

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open]);

  const onSubmitForm = async (data: Animal) => {
    createTask(data);
  };

  return (
    <>
      <DialogCustom open={open} handleClose={handleClose}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
          <DialogTitle id="alert-dialog-title">{"Add Animal"}</DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <RHFTextField label={`Name`} name={"name"} disabled={isLoading} />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" disabled={isLoading}>
              Save
            </Button>
          </DialogActions>
        </FormProvider>
      </DialogCustom>
    </>
  );
}
