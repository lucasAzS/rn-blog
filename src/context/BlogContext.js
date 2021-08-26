import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'getBlogPosts':
      return action.payload;
    case 'editBlogPost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'removeBlogPost':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get('/blogposts');
    dispatch({
      type: 'getBlogPosts',
      payload: res.data,
    });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const res = await jsonServer.post('/blogposts', { title, content });
    if (callback) {
      callback();
    }
  };
};

const removeBlogPost = (dispatch) => {
  return async (id) => {
    const res = await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'removeBlogPost', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    const res = await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({ type: 'editBlogPost', payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost, getBlogPosts },
  []
);
