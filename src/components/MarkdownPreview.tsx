import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap/Card';

const MarkdownPreview = () => {
  const markdownText = useSelector((state: RootState) => state.markdown.markdownText);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <>
      <h1>Preview</h1>
      <Card className={`mb-3 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Card.Body>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </Card.Body>
      </Card>
    </>
  );
};

export default MarkdownPreview;
