import { ReactNode, Component, Fragment } from "react";
import { SideBlock } from "../SideBlock/sideBlock";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  List,
  Skeleton,
} from "@mui/material";

type UserComment = {
  user: {
    fullName: string;
    avatarUrl: string;
  };
  text: string;
};

type CommentsBlockProps = {
  items: UserComment[];
  isLoading: boolean;
  children?: ReactNode;
};

export class CommentsBlock extends Component<CommentsBlockProps> {
  constructor(props: CommentsBlockProps) {
    super(props);
  }

  render(): ReactNode {
    const { items, isLoading, children } = this.props;
    return (
      <SideBlock title="Комментарии">
        <List>
          {(isLoading ? [...Array(5)] : items).map((obj, i) => (
            <Fragment key={i}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  {isLoading ? (
                    <Skeleton variant="circular" width={40} height={40} />
                  ) : (
                    <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />
                  )}
                </ListItemAvatar>
                {isLoading ? (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Skeleton variant="text" height={25} width={120} />
                    <Skeleton variant="text" height={18} width={230} />
                  </div>
                ) : (
                  <ListItemText
                    primary={obj.user.fullName}
                    secondary={obj.text}
                  />
                )}
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
        {children}
      </SideBlock>
    );
  }
}
