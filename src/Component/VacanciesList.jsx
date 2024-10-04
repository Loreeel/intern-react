import axios from 'axios';
import {useEffect, useState} from 'react';
import styles from './VacanciesList.module.css'

const VacanciesList = () => {

    const [vacancies, setVacancies] = useState([]);
    const token = "7905b36eaa48ac2e7df6e532fa336414d2c426169efd8df22f1c6daa574a113ea43d987ac9e46a0cdd5923a1a335a1a45800194ac5b5323d89756ab36c848a5f3c86c02095e0a64a9f263ac24c2f71ff7fc750028669c07c0f72f76a45f809eddd75750d47929720f62d998dd8e7edf78e42f5a5363c75fe1321eb56b6cc820a"

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        axios.get('http://localhost:1337/api/vacancies',config)
            .then(response => setVacancies(response.data.data))
            .catch(error => console.error(error));
    }, []);

    return (<div> {vacancies.map(vacancy => (
        <div className={styles.vacancyCard} key={vacancy.id}><h2>{vacancy.title}</h2> <p>{vacancy.description}</p></div>))} </div>);
}
export default VacanciesList;