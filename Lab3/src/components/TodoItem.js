
function TodoItem(props) {
    const now = new Date();
    const dueDate = props.dueDate;
    const dateDifference = dueDate.getTime() - now.getTime();
    const daysLeft = Math.round(dateDifference / (1000 * 3600 * 24));

    return (
        <div className='container'>
            <div className='main'>
                <div className='elements'>
                    <span>{props.text}</span>
                    <span>{dueDate.toLocaleDateString()} {dueDate.toLocaleTimeString()}</span>
                    <span>{daysLeft > 0 ? daysLeft : 0}</span>
                </div>
                <input type='button' className='removeBtn' value='x' onClick={props.handleRemove} />
            </div>
        </div>
    );
}

export default TodoItem;