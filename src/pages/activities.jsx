import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Pagination from '../components/pagination';

import './page-styles/activities.scss'

const Activites = ({data}) => {
    let PageSize = 10;

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);


    const currentPageData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div className='activities-container'>
            <Header />
            {currentPageData.map((activity) => (    
                <div key={activity.id}>{activity.name}</div>
                ))}
                <Pagination
                 currentPage={currentPage}
                 totalCount={data.length}
                 pageSize={PageSize}
                 onPageChange={page => setCurrentPage(page)}
                />
        </div>
    )
}

export default Activites;