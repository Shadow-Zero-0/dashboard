import { Alert, Button, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Titlepages from "../components/Titlepages";
const Form = () => {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  const [open, setOpen] =useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleClick()
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Titlepages title1={'CREATE USER'} title2={'Create a New User Profile'}/>
      <Stack
        direction={"row"}
        sx={{
          gap: 2,
        }}
      >
        <TextField
          sx={{ flex: 1 }}
          error={Boolean(errors.firstName)}
          label="name"
          variant="filled"
          helperText={
            Boolean(errors.firstName)
              ? "This field is required & min 3 character"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
        />

        <TextField
          helperText={
            Boolean(errors.lisrtName)
              ? "This field is required & min 3 character"
              : null
          }
          error={Boolean(errors.lisrtName)}
          {...register("lisrtName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Lasr name"
          variant="filled"
        />
      </Stack>

      <TextField
        helperText={
          Boolean(errors.Email) ? "Please provide a vaild email address" : null
        }
        error={Boolean(errors.Email)}
        {...register("Email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />

      <TextField
        helperText={
          Boolean(errors.contactNumber)
            ? "Please provide a vaild contactNumber address"
            : null
        }
        error={Boolean(errors.contactNumber)}
        {...register("contactNumber", { required: true, pattern: phoneRegExp })}
        label="contactNumber"
        variant="filled"
      />
      <TextField label="Adrees 1" variant="filled" />
      <TextField label="Adrees 2" variant="filled" />

      <TextField select variant="filled" label="Select" defaultValue="User">
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box
        sx={{
          textAlign: "right",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{
            textTransform: "capitalize",
          }}
        >
          create new user
        </Button>
        <Snackbar
         anchorOrigin={{ vertical:"top", horizontal:"right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
          sx={{
            width:'25%'
          }}
 
      >
        <Alert  sx={{
            width:'100%'
          }} severity="info">Account Created successfully</Alert>
      </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
