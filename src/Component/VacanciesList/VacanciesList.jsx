import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styles from './VacanciesList.module.css'

const VacanciesList = () => {

    const [vacancies, setVacancies] = useState([]);
    const token = "4f908c365962aad36ccd76b6260c32c3fdf66b2d9e7a676ce3214be8e980a5845af70f482c77ebf244d381d1f3707f6c949c835c6dec08cbf3838b92c7acf17611229f6606514e7ad8a0e9844a70e9b96b5824fa95d89f325edf5831197eeae2d8e384a28221116fd10e7e96a7d70d1d0370747e78fc25b00f734a4f6bbf218e"

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const baseUrl = "https://shrouded-wildwood-36572-f8ad95480e14.herokuapp.com/"
    useEffect(() => {
        axios.get(baseUrl+'api/vacancies',config)
            .then(response => setVacancies(response.data.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Vacancies</h2>
            {vacancies.map(vacancy => (
                <div className={styles.vacancy_card} key={vacancy.id}>
                    <span><h2>{vacancy.title}</h2><b>{vacancy.Location}</b></span>
                    <p>{vacancy.description}</p>
                    <pre>{vacancy.Requirements}</pre>
                    <p><em>{vacancy.salary + "$/month"}</em></p>
                </div>))}
        </div>);
}
export default VacanciesList;