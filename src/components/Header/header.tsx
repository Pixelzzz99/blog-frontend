import { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/posts/create">
            <Button variant="contained">Написать статью</Button>
          </Link>
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
        <Link to="/login">
          <Button variant="contained">Войти</Button>
        </Link>
        <Link to="/register">
          <Button variant="contained">Создать аккаунт</Button>
        </Link>
      </>
    );
  }

  render() {
    return (
      <div className="root-header">
        <Container maxWidth="lg">
          <div className="inner-header">
            <Link to="" className="logo-header">
              <div>Pixelzzz blog</div>
            </Link>
            <div className="buttons-header">{this.renderButtons()}</div>
          </div>
        </Container>
      </div>
    );
  }
}
