import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Pagination from '../components/pagination';
import ActivityCard from '../components/activity-card';

import './page-styles/activities.scss'
import { SearchSharp } from '@mui/icons-material';

const Activites = ({ data, setActivity, currentPage, setCurrentPage }) => {
    let PageSize = 9;

    const navigate = useNavigate();
    // const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter(data =>
        data.name.toLowerCase().includes(searchTerm),
    );

    const currentPageData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredData]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
        setCurrentPage(1)
    };

    const handleClick = (activity) => {
        setActivity(activity);
        navigate(`${activity.id}`)
    }

    return (
        <>
            <Header />
            <div className="search-box">
                <button className="btn-search"><SearchSharp /></button>
                <input type="search" className="input-search" placeholder="Type to Search..." onChange={handleChange} />
            </div>
            <div className='activities-container'>
                <div className='activity-grid'>
                    {currentPageData.map((activity) => (
                        <div key={activity.id} className='activity' onClick={() => { handleClick(activity) }}>
                            <ActivityCard activity={activity} />
                        </div>
                    ))}
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={filteredData.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}

export default Activites;