import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'editBlogPost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'removeBlogPost':
      return state.filter((post) => post.id !== action.payload);
    case 'addBlogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'addBlogPost', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const removeBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'removeBlogPost', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'editBlogPost', payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost },
  [{ title: 'Test title', content: 'Test content', id: 1 }]
);
