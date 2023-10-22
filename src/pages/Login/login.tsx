import { Typography, TextField, Paper, Button } from "@mui/material";
import "./Login.scss";

export const Login = () => {
  return (
    <Paper classes={{ root: "root-login" }}>
      <Typography variant="h5" classes={{ root: "title" }}>
        Вход в аккаунт
      </Typography>
      <TextField
        classes={{ root: "field" }}
        label="E-Mail"
        error
        helperText="Неверно указана почта"
        fullWidth
      />
      <TextField classes={{ root: "field" }} label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Войти
      </Button>
    </Paper>
  );
};
