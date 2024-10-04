import React, {useEffect, useState} from 'react';
import styles from "./CandidateList.module.css";
import axios from "axios";


const CandidateList = (props) => {
    const [candidates, setCandidates] = useState([]);
    const token = "4f908c365962aad36ccd76b6260c32c3fdf66b2d9e7a676ce3214be8e980a5845af70f482c77ebf244d381d1f3707f6c949c835c6dec08cbf3838b92c7acf17611229f6606514e7ad8a0e9844a70e9b96b5824fa95d89f325edf5831197eeae2d8e384a28221116fd10e7e96a7d70d1d0370747e78fc25b00f734a4f6bbf218e"

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const baseUrl = "https://shrouded-wildwood-36572-f8ad95480e14.herokuapp.com/"
    useEffect(() => {
        axios.get(baseUrl+'api/candadates?populate=*',config)
            .then(response => setCandidates(response.data.data))
            .catch(error => console.error(error));
    }, []);
    console.log(candidates)
    return (
        <div className={styles.candidate_container}>
            <h2 className={styles.title}>Candidates</h2>
            {candidates.map(candidate => (
            <div className={styles.candidate_card} key={candidate.id}>
                <div>
                    <p><b>{candidate.name}</b></p>
                    <p><em>{candidate.email}</em></p>
                </div>
                <div>{
                    candidate.vacancies.map((vacancy)=>(
                        <p key={vacancy.id}>{vacancy.title}</p>
                    ))
                }</div>
            </div>))}
        </div>
    )

};

export default CandidateList;