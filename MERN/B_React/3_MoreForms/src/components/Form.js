import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("")
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
    };
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                
                {firstName.length < 2 && firstName.length > 0 ? (
                    <p>First Name must be at least 2 characters</p>
                ) : null}
                                
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>

                {lastName.length < 2 && lastName.length > 0 ? (
                    <p>Last Name must be at least 2 characters</p>
                ) : null}

                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>

                {email.length < 5 && email.length > 0 ? (
                    <p>Last Name must be at least 2 characters</p>) : null}
                )

                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPw(e.target.value) } />
                </div>
                {confirmPw !== password ? (
                    <p>Passwords must match</p>
                ) : null}

                <input type="submit" value="Create User" />
            </form>;
            <h2>Your Form Data</h2>
            <h3>First Name</h3>
            <span>{firstName}</span>
            <h3>Last Name</h3>
            <span>{lastName}</span>
            <h3>Email</h3>
            <span>{email}</span>
            <h3>Password</h3>
            <span>{password}</span>
            <h3>Confirm Password</h3>
            <span>{confirmPw}</span>
        </div>
    );
};


export default Form;