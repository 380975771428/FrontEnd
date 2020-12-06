import { useState } from 'react';

function TodoForm(props) {
    const isoNow = new Date().toISOString();

    const [text, setText] = useState('');
    const [dueDate, setDueDate] = useState(isoNow.substring(0, isoNow.length - 1));

    const textChange = (value) => {
        setText(value);
    }

    const dueDateChange = (value) => {
        setDueDate(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(text, dueDate);
    }

    const isValid = () => {
        return text.length > 3 && dueDate.length > 0;
    }

    return (
      <div className='container'>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder="Text" required={true} minLength={3} onChange={(e) => textChange(e.target.value)} value={text} />
          <input type="datetime-local" id="dateInput" required={true} onChange={(e) => dueDateChange(e.target.value)} value={dueDate} />
          <input type="submit" disabled={!isValid()} value="Додати запис" />
        </form>
      </div>
    );
}

export default TodoForm;