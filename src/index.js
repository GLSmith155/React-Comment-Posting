// Importing the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


// Creating React Components
const App = () => {
    return (
        <div className="ui contianer comments">
            <ApprovalCard />
            <CommentDetail 
                author="Shoulder" 
                timeAgo="Yesterday at 8:45 PM"
                commentMessage="Nice post!"
                fakerImage={faker.image.image()} 
            />   
            <CommentDetail 
                author="Leg" 
                timeAgo="Today at 6:25 PM"
                commentMessage="Wow neat"
                fakerImage={faker.image.image()} 
            /> 
            <CommentDetail 
                author="Arm" 
                timeAgo="Today at 7:34 PM" 
                commentMessage="Where is that at?"
                fakerImage={faker.image.image()} 
            /> 
        </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(<App />,document.querySelector('#root')); 
