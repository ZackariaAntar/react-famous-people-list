


function FamousPerson(props) {

    return (
        <li key = {props.person.id}>
            {props.person.name} is famous for "{props.person.role}"
        </li>
	);



}

export default FamousPerson;