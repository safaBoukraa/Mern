import React from 'react'
import { useState } from 'react'
import classes from "./MyNewComponent.module.css" 

const Personcomponent = (props) => {
    const [persons,setPersons]=useState(props.person)
    const counter =()=>{ setPersons({ ...persons,age:persons.age+1});
};


   

   
    return(
        // <div>
        //     {this.props.someText}
        // </div>

        <div className={classes.card}>
            <div className={classes.content}>
                <h1>{persons.lastName}, {persons.firstName}</h1>
                <p>Age: {persons.age}</p>
                <p>Hair Color: {persons.hairColor}</p>
                <button onClick={counter}>Birthday button for {persons.firstName} {persons.lastName}</button>
            </div>
        </div>)
}

export default Personcomponent;