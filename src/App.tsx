import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import store, { RootState } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import ThemeToggler from './components/ThemeToggler';

const ThemedApp = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
    document.documentElement.style.backgroundColor = isDarkMode ? '#343a40' : '#ffffff';
  }, [isDarkMode]);

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row className="w-100 justify-content-end mt-3">
        <Col xs="auto">
          <ThemeToggler />
        </Col>
      </Row>
      <Row className="w-100">
        <Col>
          <h1 className="display-1 text-center my-4">Markdown Previewer</h1>
        </Col>
      </Row>
      <Row className="w-100">
        <Col md={6}>
          <MarkdownEditor />
        </Col>
        <Col md={6}>
          <MarkdownPreview />
        </Col>
      </Row>
    </Container>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  );
}

export default App;
