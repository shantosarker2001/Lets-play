import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-container'>
            <div className='question'>
                <h1>How does React works??</h1>
                <p>Ans:
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
                <p>Its performs depends on JSX,Virtual Dom,Components and Props,State Management</p>
            </div>
            <div className='question'>
                <h1>Difference Between Props and State??</h1>
                <p>Ans:
                    Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div className='question'>
                <h1>How does React works??</h1>
                <p>Ans:What is React and how its work?
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
                <p>Its performs depends on JSX,Virtual Dom,Components and Props,State Management</p>
            </div>
        </div>
    );
};

export default Question;