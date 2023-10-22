import { Typography, TextField, Paper, Button, Avatar } from "@mui/material";
import "./Registration.scss";

export const Registration = () => {
  return (
    <Paper classes={{ root: "root-registration" }}>
      <Typography variant="h5" classes={{ root: "title" }}>
        Создание аккаунта
      </Typography>
      <div className="avatar-register">
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className="field" label="Полное имя" fullWidth />
      <TextField className="field" label="E-Mail" fullWidth />
      <TextField className="field" label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
    </Paper>
  );
};
