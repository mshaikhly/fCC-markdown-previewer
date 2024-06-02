import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Initial markdown state (default markdown)
const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ------------ | ------------- | --------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
`;

interface MarkdownState {
  markdownText: string;
}

const initialMarkdownState: MarkdownState = {
  markdownText: defaultMarkdown,
};

const markdownSlice = createSlice({
  name: 'markdown',
  initialState: initialMarkdownState,
  reducers: {
    setMarkdownText: (state, action: PayloadAction<string>) => {
      state.markdownText = action.payload;
    },
  },
});

export const { setMarkdownText } = markdownSlice.actions;

interface ThemeState {
  isDarkMode: boolean;
}

const getInitialThemeState = (): ThemeState => {
  const savedTheme = localStorage.getItem('isDarkMode');
  return {
    isDarkMode: savedTheme ? JSON.parse(savedTheme) : false,
  };
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialThemeState(),
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    markdown: markdownSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
