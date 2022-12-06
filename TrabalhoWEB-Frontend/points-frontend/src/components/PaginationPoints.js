import React from 'react'
import { Pagination } from 'react-bootstrap';

function PaginationPoints({ 
    pointsPerPage, 
    totalPoints, 
    paginate, 
    nextPage, 
    prevPage,
    firstPage,
    lastPage
}) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPoints / pointsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
        {       
            totalPoints != 0 && 
            <Pagination>
            
            <Pagination.First onClick={firstPage}/>
            <Pagination.Prev onClick={prevPage}/>
            {pageNumbers.map(number => {
                return (
                    <Pagination.Item key={number} onClick={() => paginate(number)}>{number}</Pagination.Item>
                )
            })}
            <Pagination.Next onClick={nextPage}/>
            <Pagination.Last onClick={lastPage}/>
            </Pagination>
        }
        </div>
    )

}

export default PaginationPoints