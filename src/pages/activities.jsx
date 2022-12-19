import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Pagination from '../components/pagination';
import ActivityCard from '../components/activity-card';

import './page-styles/activities.scss'

const Activites = ({ data }) => {
    let PageSize = 9;
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const currentPageData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <Header />
            <div className='activities-container'>
                <div className='activity-grid'>
                    {currentPageData.map((activity) => (
                        <div key={activity.id} className='activity'>
                            <ActivityCard activity={activity} />
                        </div>
                    ))}
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}

export default Activites;