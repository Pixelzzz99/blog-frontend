import { Component } from "react";
import { Button, Container } from "@mui/material";
import "./Header.scss";

export class Header extends Component<{}, { isAuth: boolean }> {
  constructor() {
    super({});
    this.state = {
      isAuth: false,
    };
  }

  onClickLogout() {}

  renderButtons() {
    if (this.state.isAuth) {
      return (
        <>
          <a href="/posts/create">
            <Button variant="contained">Написать статью</Button>
          </a>
          <Button
            onClick={this.onClickLogout}
            variant="contained"
            color="error"
          >
            Выйти
          </Button>
        </>
      );
    }
    return (
      <>
        <a href="/login">
          <Button variant="contained">Войти</Button>
        </a>
        <a href="/register">
          <Button variant="contained">Создать аккаунт</Button>
        </a>
      </>
    );
  }

  render() {
    return (
      <div className="root">
        <Container maxWidth="lg">
          <div className="inner">
            <a href="" className="logo">
              <div>Pixelzzz blog</div>
            </a>
            <div className="buttons">{this.renderButtons()}</div>
          </div>
        </Container>
      </div>
    );
  }
}
