import {
  createSlice,
  createAsyncThunk,
  AsyncThunkAction,
} from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import instance from "../../axios";

interface UserInfo {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface IPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imageUrl: string;
  viewsCount: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: UserInfo;
}
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await instance.get("/posts");
  return response.data;
});

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.posts.status = "loading";
    },
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.posts.status = "loaded";
      state.posts.items = action.payload;
    },
    [fetchPosts.rejected.type]: (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    },
  },
});

export const postsReducer = postsSlice.reducer;
