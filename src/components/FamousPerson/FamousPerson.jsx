


function FamousPerson(props) {
    let famousPeopleArray = props.array
    // let setPeopleArray = props.update
    // let fetchPeople = props.render
    // let random = Math.floor(Math.random() * famousPeopleArray.length)



    // console.log(fetchPeople);
    // console.log(random);

    return (

			<p>{famousPeopleArray[0].name} is famous for "{famousPeopleArray[0].role}"</p>
	);



}

export default FamousPerson;