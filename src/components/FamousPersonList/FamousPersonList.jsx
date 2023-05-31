import FamousPerson from "../FamousPerson/FamousPerson";

function FamousPersonList(props) {
    let famousPeopleArray = props.array


    return (
		<>
        <FamousPerson />
			<ul>
				{famousPeopleArray.map((person) => {
					return (
						<li key={person.id}>
							{person.name} is famous for "{person.role}"
						</li>
					);
				})}
			</ul>
		</>
	);


}

export default FamousPersonList