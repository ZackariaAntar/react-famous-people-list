import React, { useEffect, useState } from 'react';
import './FamousSection.css';
import axios from "axios";
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPerson from '../FamousPerson/FamousPerson';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

function FamousSection() {
  const [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    fetchPeople();
  }, [])

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    axios.get(('/people')).then((response) => {
      console.log(response.data);
      setPeopleArray(response.data)

    }).catch((err) => {console.log(err)})

  }



    return (
		<section className="new-person-section">
			<FamousPersonForm
				array={famousPeopleArray}
				change={setPeopleArray}
				render={fetchPeople}
			/>
			<FamousPersonList array={famousPeopleArray} />
			<FamousPerson
				array={famousPeopleArray}
				// change={setPeopleArray}
				// render={fetchPeople}
			/>
		</section>
	);
}

export default FamousSection;
