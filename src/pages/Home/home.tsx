import { Component } from "react";
import { Tabs, Tab, Grid } from "@mui/material";
import { Post } from "../../components/Post/post";

export class Home extends Component {
  render() {
    return (
      <>
        <Tabs
          style={{ marginBottom: 15 }}
          value={0}
          aria-label="basic tabs example"
        >
          <Tab label="Новые" />
          <Tab label="Популярные" />
        </Tabs>

        <Grid container spacing={4}>
          <Grid xs={8} item>
            <Post
              id={1}
              title="Roast the code #1 | Rock Paper Scissors"
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              createdAt={"12 июня 2022 г."}
              viewsCount={150}
              commentsCount={3}
              tags={["react", "fun", "typescript"]}
              isEditable
            />
          </Grid>
        </Grid>
      </>
    );
  }
}
