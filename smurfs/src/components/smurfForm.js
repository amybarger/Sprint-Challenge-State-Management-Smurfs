import React, { useState } from 'react';
import { smurfPost } from '../actions/smurfActions';
import { connect } from 'react-redux';


const SmurfForm = (props) =>{

    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()   
    });

    const formSubmit = (e) => {
        e.preventDefault();
        props.smurfPost(formState);
        setFormState({
        name: "",
        age: "",
        height: "",
    })}

    const inputChange = (e) => {
       setFormState({ ...formState, [e.target.name]: e.target.value})}

        return (
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    Smurf Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={inputChange}
                        required
                    />
                </label>
                <label htmlFor="age">
                    Age:
                    <input 
                        name="age"
                        id="age"
                        value={formState.age}
                        onChange={inputChange}
                        required
                    >
                    </input>
                </label>
                <label htmlFor="height">
                    Height
                    <input 
                        name="height"
                        id="height"
                        value={formState.height}
                        onChange={inputChange}
                        required
                    >
                    </input>
                </label>
                <button className="submitButton">Submit</button>    
            </form>  
        </div>
        )
    
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {smurfPost})(SmurfForm);