import { Post } from "../../components/Post/post";
import { CommentsBlock } from "../../components/CommentsBlock/CommentsBlock";
import { AddComment } from "../../components/AddComment/addcomment";

export const FullPost = () => {
  return (
    <>
      <Post
        id={1}
        title="Roast the code #1 | Rock Paper Scissors"
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={{
          avatarUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
          fullName: "Keff",
        }}
        createdAt={"12 июня 2022 г."}
        viewsCount={150}
        commentsCount={3}
        tags={["react", "fun", "typescript"]}
        isFullPost
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque itaque
          tempore eveniet cupiditate aut vel ab laborum nesciunt quaerat! Minus
          molestiae laudantium qui corrupti magni suscipit inventore aliquam
          culpa repellendus?
        </p>
      </Post>

      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Bob",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          },
          {
            user: {
              fullName: "Keff",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          },
        ]}
        isLoading={false}
      >
        <AddComment />
      </CommentsBlock>
    </>
  );
};
