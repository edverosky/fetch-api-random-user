
function RecNumSelectForm(props) {

    return (
        <select onChange={(e) => props.handleSelect(e)} className="form-select" aria-label="Default select example">
            <option value="3">Records to Display</option>
            <option value="1">One</option>
            <option value="5">Five</option>
            <option value="10">Ten</option>
        </select>
    );
}

export default RecNumSelectForm;