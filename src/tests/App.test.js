import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import App from '../App';
import Card from '../components/Card';
const state = {  
  todos: ['buy Milk', 'buy food', 'finish course', 'go to the gym'],
};

afterEach(() => {
  cleanup()
});

describe('App Element Testing', () => {
  test('should be in the document', () => {
    render(<App />);
    const AppElement = screen.getByTestId('app');
    expect(AppElement).toBeInTheDocument();
  });

  test('should contain form components', () => {
    render(<App todos={state.todos}/>);
    const AppElement = screen.getByTestId('app');
    const formElement = screen.getByTestId('form');
    expect(AppElement).toContainElement(formElement);
  });

  test('should not have li Element', () => {
    render(<App />);
    const AppElement = screen.getByTestId('app');
    expect(AppElement).not.toContainHTML('<li></li>');
  });

  test('should match snapshot', () => {
      const snapshot = renderer.create(<App />).toJSON();
      expect(snapshot).toMatchSnapshot();
  });
});