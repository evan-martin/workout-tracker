import React from 'react';
import { usePagination, DOTS } from '../hooks/usePagination';
import classnames from 'classnames';
import './component-styles/pagination.scss';
const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    let lastPage = paginationRange[paginationRange.length - 1];

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        if (currentPage != lastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if (currentPage != 1) {
            onPageChange(currentPage - 1);
        }
    };


    return (
        <ul
            className='pagination-container'
        >
            <div className='pagination-item-container'>
                <li
                    className='pagination-item'
                    onClick={onPrevious}
                >
                    <div className="arrow left" />
                </li>
                {paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots">&#8230;</li>;
                    }

                    return (
                        <li
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                          })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className='pagination-item'
                    onClick={onNext}
                >
                    <div className="arrow right" />
                </li>
            </div>
        </ul>
    );
};

export default Pagination;
