import { useCallback, useMemo, useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { SimpleMdeReact } from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import "./AddPost.scss";

export const AddPost = () => {
  const imageUrl = "";
  const [value, setValue] = useState("");

  const handleChangeFile = () => {};
  const onClickRemoveImage = () => {};

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <Paper style={{ padding: 30 }}>
      <Button variant="outlined" size="large">
        Загрузить изображение
      </Button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Удалить изображение
        </Button>
      )}
      {imageUrl && (
        <img
          src={`http://localhost:4444${imageUrl}`}
          alt="Uploaded"
          className="image"
        />
      )}
      <br />
      <br />
      <TextField
        classes={{ root: "title" }}
        variant="standard"
        placeholder="Заголовок поста"
        fullWidth
      />
      <TextField
        classes={{ root: "tags" }}
        variant="standard"
        placeholder="Теги"
        fullWidth
      />
      <SimpleMdeReact value={value} onChange={onChange} options={options} />
      <div className="buttons">
        <Button size="large" variant="contained">
          Опубликовать
        </Button>
        <a href="">
          <Button size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};
