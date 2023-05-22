import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createNewPost,
  deletePostById,
  getAllPosts,
  updateExistingPost,
} from "../../services/posts";

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
  posts: [],
  error: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed',
  count: 0,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await getAllPosts();
    return response;
  } catch (err) {
    return err.message;
  }
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initalPost) => {
    try {
      const res = await createNewPost(initalPost);
      return res;
    } catch (err) {
      return err.message;
    }
  }
);

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  try {
    const res = await updateExistingPost(post);
    return res;
  } catch (err) {
    return err.message;
  }
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    try {
      const res = await deletePostById(postId);
      return res;
    } catch (err) {
      return err.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.entities[postId];
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    increaseCount: (state, action) => {
      state.count = state.count + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const postId = action.payload;
        postsAdapter.removeOne(state, postId);
      });
  },
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;

export const selectPostsByUserId = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export const { postAdded, reactionAdded, increaseCount } = postsSlice.actions;

export default postsSlice.reducer;
