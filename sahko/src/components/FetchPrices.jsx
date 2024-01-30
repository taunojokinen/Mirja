import React from "react";
//import defineApiParameters from "./DefineApiParameters"; 
import FetchPricesFromAPI from "./FetchPricesFromAPI";
import { Chart } from "react-google-charts";   
import {jsonToArray} from "./Utils";
  
const FetchPrices = () => {
    const prices = FetchPricesFromAPI(); 
    const myData = (prices?.prices) ? prices.prices : [];
       
    let data;
    if (myData.length !== 0){
        data = jsonToArray(myData);
    }
    //console.log('data: ', data); 
             
    function Bar() {
    return (
        <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        />
    );
    } 

    return (    
        <div>
            <h1>Pörssisähkön hinta 7 vrk ajalta</h1>
            <div><Bar/></div> 
        </div>
    )
  }

export default FetchPrices;
