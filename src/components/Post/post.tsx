import { Component, ReactNode } from "react";
import { clsx } from "clsx";
import { IconButton } from "@mui/material";
import { Delete, Comment, Edit, Visibility } from "@mui/icons-material";
import { PostSkeleton } from "./Skeleton";
import "./Post.scss";
import { UserInfo } from "../UserInfo/userInfo";

type PostProps = {
  id: number;
  title: string;
  imageUrl: string;
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  isFullPost: boolean;
  isLoading: boolean;
  isEditable: boolean;
  createdAt: Date | string;
  children: string;
};

export class Post extends Component<PostProps> {
  constructor(props: PostProps) {
    super(props);
  }

  onClickRemove() {}

  checkEditable() {}

  render(): ReactNode {
    const {
      id,
      title,
      imageUrl,
      viewsCount,
      commentsCount,
      user,
      tags,
      createdAt,
      isFullPost,
      isLoading,
      isEditable,
      children,
    } = this.props;

    if (isLoading) {
      return <PostSkeleton />;
    }

    return (
      <div className={clsx("root", { ["rootFull"]: isFullPost })}>
        {isEditable && (
          <div className="editButtons">
            <a href={`/posts/${id}/edit`}>
              <IconButton color="primary">
                <Edit />
              </IconButton>
            </a>
            <IconButton
              color="secondary"
              onClick={this.onClickRemove}
            >
                <Delete />
            </IconButton>
          </div>
        )}

        {imageUrl && (
          <img
            className={clsx("image", { ["imageFull"]: isFullPost })}
            alt={title}
            src={imageUrl}
          />
        )}
        <div className="wrapper">
          <UserInfo {...user} additionalText={createdAt} />
          <div className="indention">
            <h2 className={clsx("title", { ["titleFull"]: isFullPost })}>
              {isFullPost ? title : <a href={`/posts/${id}/show`}>{title}</a>}
            </h2>
            <ul className="tags">
              {tags.map((name) => (
                <li key={name}>
                  <a href={`/tags/${name}`}>{name}</a>
                </li>
              ))}
            </ul>
            {children && <div className="content">{children}</div>}
            <ul className="postDetails">
                <li>
                    <Visibility/>
                    <span>{viewsCount}</span>
                </li>
              <li>
                <Comment />
                <span>{commentsCount}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
