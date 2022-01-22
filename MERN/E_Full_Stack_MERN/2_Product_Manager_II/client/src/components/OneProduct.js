import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OneProduct = (props) => {
    const [oneProduct, setOneProduct] = useState({})
    const{id}=props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => console.log(err));

    },[])

    return (
        <div>
            <h2>{oneProduct.title}</h2>
            <p>Cost: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <Link to={"/"}>Home</Link>
        </div>
    );
};

export default OneProduct