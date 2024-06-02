import { useSelector, useDispatch } from 'react-redux';
import { RootState, toggleTheme } from '../store/store';
import Button from 'react-bootstrap/Button';

const ThemeToggler = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="theme-toggler-container">
      <Button
        variant={isDarkMode ? "dark" : "light"}
        onClick={handleToggleTheme}
        className="me-2"
        style={{ transition: 'background-color 0.5s, color 0.5s' }}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};

export default ThemeToggler;
