import axios from 'axios'
import { useState } from "react";

function FamousPersonForm(props) {
    let fetchPeople = props.render

    const [famousPersonName, setPersonName] = useState('');
    const [famousPersonRole, setPersonRole] = useState('');

    const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    axios.post('/people', {name:famousPersonName , role: famousPersonRole})
    .then((response) => {
      fetchPeople()
      setPersonName('')
      setPersonRole('')

    } )

    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object
    //       with a `name` and a `role` property

  }

    return(
    <form onSubmit={addPerson}>
		<label htmlFor="name-input">Name:</label>
		<input
			value={famousPersonName}
			id="name-input"
			onChange={(e) => setPersonName(e.target.value)}
		/>
		<label htmlFor="role-input">Famous for:</label>
		<input
			value={famousPersonRole}
			id="role-input"
			onChange={(e) => setPersonRole(e.target.value)}
		/>
		<button type="submit">Done</button>
	</form>
    )
}
export default FamousPersonForm;


