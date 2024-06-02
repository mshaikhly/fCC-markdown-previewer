import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { marked } from 'marked';

const MarkdownPreview = () => {
  const markdownText = useSelector((state: RootState) => state.markdown.markdownText);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const getMarkdownText = () => {
    const rawMarkup = marked(markdownText);
    return { __html: rawMarkup };
  };

  return (
    <div id="preview" className={`${isDarkMode ? 'dark-mode' : ''}`} dangerouslySetInnerHTML={getMarkdownText()} />
  );
};

export default MarkdownPreview;
