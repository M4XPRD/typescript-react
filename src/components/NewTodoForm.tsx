import { useRef } from 'react'; // Для неуправляемой формы

interface NewTodoProps {
  handleClick: (text: string) => void,
}

const NewTodoForm = ({ handleClick }: NewTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        ref={inputRef}
      />
      <button type="button" onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
