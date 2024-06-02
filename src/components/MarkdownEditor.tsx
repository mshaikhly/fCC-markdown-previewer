import { useDispatch, useSelector } from 'react-redux';
import { RootState, setMarkdownText } from '../store/store';
import Form from 'react-bootstrap/Form';

const MarkdownEditor = () => {
  const dispatch = useDispatch();
  const markdownText = useSelector((state: RootState) => state.markdown.markdownText);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setMarkdownText(e.target.value));
  };

  return (
    <Form.Group controlId="editor">
      <Form.Label className={isDarkMode ? 'text-white' : ''}>
        <h1>Editor</h1>
      </Form.Label>
      <Form.Control
        as="textarea"
        rows={10}
        value={markdownText}
        onChange={handleChange}
        className={`mb-3 ${isDarkMode ? 'dark-mode' : ''}`}
      />
    </Form.Group>
  );
};

export default MarkdownEditor;
