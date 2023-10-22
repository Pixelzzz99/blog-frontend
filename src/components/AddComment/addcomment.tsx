import { TextField, Avatar, Button } from "@mui/material";
import "./AddComment.scss";

export const AddComment = () => {
  return (
    <>
      <div className="root-add-comment">
        <Avatar
          classes={{ root: "avatar" }}
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <div className="form">
          <TextField 
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  );
};
