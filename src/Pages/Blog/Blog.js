import React from 'react';

const Blog = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title font-bold">Question: What are the different ways to manage a state in a React application?</h2>
                <p className='font-bold'>Answer: <li>Local state</li> <li>Global state</li> <li>Server state</li> <li>URL state</li></p>
                <h2 className="card-title font-bold">Question: How does prototypical inheritance work?</h2>
                <p className='font-bold'>Answer: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
                <h2 className="card-title font-bold">Question: What is a unit test? Why should we write unit tests?</h2>
                <p className='font-bold'>Answer: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                <h2 className="card-title font-bold">Question: React vs. Angular vs. Vue?</h2>
                <p className='font-bold'>Answer: </p>
            </div>
        </div>
    );
};

export default Blog;