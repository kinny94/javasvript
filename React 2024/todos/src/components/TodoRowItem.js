function TodoRowItem(props) {

    return (
        <tr>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.todo}</td>
            <td>{props.assigned}</td>
        </tr>
    )
}

export default TodoRowItem;