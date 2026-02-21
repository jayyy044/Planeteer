import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import './ResultsPage.css'


const ResultsPage = () => {
const { state } = useLocation()
const navigate = useNavigate()
const { disease, causes, elimination, prevention } = state
console.log("Received state in ResultsPage:", state)
    return (
        <div className='results-page-cont'>
            <div className="results-page">
                <h1>{disease}</h1>
                <p className='titles'>Causes:</p>
                <p className='information'>{causes}</p>
                <p className='titles'>Removing Disease:</p>
                <p className='information'>{elimination}</p>
                <p className='titles'>Prevention:</p>
                <p className='information'>{prevention}</p>
                <button onClick={() => navigate('/upload')}>Analyze Another Image</button>
            </div>
        </div>
    )
}

export default ResultsPage