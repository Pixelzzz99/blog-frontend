import { Component, ReactNode } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import { Tag } from "@mui/icons-material";

import { SideBlock } from "../SideBlock/sideBlock";

type TagsBlockProps = {
  tags: string[];
  isLoading: boolean;
};

export class TagsBlock extends Component<TagsBlockProps> {
  constructor(props: TagsBlockProps) {
    super(props);
  }

  render(): ReactNode {
    const { tags, isLoading } = this.props;
    const items = isLoading ? ["1", "2", "3", "4", "5", "6"] : tags;
    console.log(items);

    return (
      <SideBlock title="Теги">
        <List>
          {items.map((name, i) => (
            <a
              style={{ textDecoration: "none", color: "black" }}
              href={`/tags/${name}`}
            >
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Tag />
                  </ListItemIcon>
                  {isLoading ? (
                    <Skeleton width={100} />
                  ) : (
                    <ListItemText primary={name} />
                  )}
                </ListItemButton>
              </ListItem>
            </a>
          ))}
        </List>
      </SideBlock>
    );
  }
}
