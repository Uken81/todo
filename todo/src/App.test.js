import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {TodoForm}  from './TodoForm';

const setup = () => render(<App />);
// afterEach(() => cleanup());

test('should render App component', () => {
  setup();
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
})

test('should render form component', () => {
  render(<TodoForm />);
  const formElement = screen.getByTestId('todo-form');  
  expect(formElement).toBeInTheDocument();
})

test('Should render heading text Todo', () => {
  setup();
  const header = screen.getByText('Todo');
  expect(header).toHaveTextContent('Todo');
})

test('Should have enabled button with Submit text', () => { 
  setup();
  const button = screen.getByRole('button', {name: 'Submit'});
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
})

test('Todo is added when user types a todo in input and clicks submit button', () => {
  setup();
  const input = screen.getByRole('textbox');
  const button = screen.getByText('Submit');
  userEvent.type(input, 'Walk dog');
  userEvent.click(button);
  const todo = screen.getByText('Walk dog');
  expect(todo).toBeInTheDocument();
})

test('check clear', () => {
  expect(screen.getByText('Walk dog')).toBeInTheDocument();
})

