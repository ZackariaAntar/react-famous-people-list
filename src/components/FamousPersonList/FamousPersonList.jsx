import FamousPerson from "../FamousPerson/FamousPerson";

function FamousPersonList(props) {
    let famousPeopleArray = props.array


    return (
		<>
			<ul>
				{famousPeopleArray.map((person) => {
					return (
						<ul>
							<FamousPerson key={person.id} person={person} />
						</ul>
					);
				})}
			</ul>
		</>
	);


}

export default FamousPersonList