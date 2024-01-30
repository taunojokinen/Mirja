import { useState, useEffect } from "react";
import defineApiParameters from "./DefineApiParameters"; 
const FetchPricesFromAPI = () => {
    const api = defineApiParameters();

    const[prices, getPrices] = useState([]);
     useEffect(() => {
        fetch(api)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((data) => {
            //console.log(data);
            getPrices(data);
        })
     }, []);
    
    return prices;
    }

    export default FetchPricesFromAPI;