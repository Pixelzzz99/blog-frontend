import { Component, ReactNode } from "react";

import "./SideBlock.scss";

import { Typography, Paper } from "@mui/material";

type SideBlockProps = {
  title: string;
  children: ReactNode;
};

export class SideBlock extends Component<SideBlockProps> {
  constructor(props: SideBlockProps) {
    super(props);
  }

  render(): ReactNode {
    const { title, children } = this.props;
    return (
      <Paper classes={{ root: "root" }}>
        <Typography variant="h6" classes={{ root: "title" }}>
          <b>{title}</b>
        </Typography>
        {children}
      </Paper>
    );
  }
}
