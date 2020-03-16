import React from 'react';


function Home(props) {
    return (
        <div className='card mt-5 bg-light text-left'>
            <div className='card-body'>
                <h4>Pluralsight Administration</h4>
                <p>React-Redux and React Router for ultra responsive web apps.</p>
                <button className='btn btn-primary' onClick={() => (props.history.push('/about'))}>Learn More</button>
            </div>
        </div>
    )
}
export default Home