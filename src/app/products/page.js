"use client"
import { useState } from "react";


const ProductPage = () => {
const [count,setCount]= useState('');
console.log('hello from products page');
    return (
        <div>
            <h1>This is products page</h1>
        </div>
    );
};

export default ProductPage;