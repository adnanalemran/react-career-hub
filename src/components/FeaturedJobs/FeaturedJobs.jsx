import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data 
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <div className="p-4">
            <div className="text-center">
                <h2 className="text-2xl font-bold p-4 ">Featured Jobs Active jobs: {jobs.length}</h2>
             
            </div>
            <div className="grid grid-cols-2 gap-8 ">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden ' : 'flex'}>
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="mt-8 btn btn-primary justify-center align-middle mx-auto">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;