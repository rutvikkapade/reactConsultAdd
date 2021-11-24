import './currency.css'
import { useEffect, useState } from 'react';

 

export const Currency = (props)=>{
    const [data,setData] = useState(null);
    const[countt,setCount] = useState(0);
    const[fromCurrency,setFromCurrency] = useState('USD');
    const[toCurrency,setToCurrency] = useState('USD');
    const[fromCurrencyAmount,setFromCurrencyAmount] = useState(0);
    const[toCurrencyAmount,setToCurrencyAmount] = useState(0);
    
    useEffect(async()=>{
       const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const stuff = await response.json();
        setData(stuff.rates);
        console.log('hello');
    },[])
    return(
        
        <center>
            <div className="container">
      
      <h4>Currency Converter</h4>
      <div className="subContainer">
      <input value={fromCurrencyAmount} placeholder="convert from..." className="inputCurrency" type="text" onChange={(e)=>{
          setFromCurrencyAmount(e.target.value);
          setToCurrencyAmount(fromTo(e.target.value,fromCurrency,toCurrency,data))
          console.log(toCurrencyAmount);
      }}/>
      <select onChange={(e)=>{
          setFromCurrency(e.target.value);
          setToCurrencyAmount(fromTo(fromCurrencyAmount,e.target.value,toCurrency,data))
      }} className="selectCurrency"  > 
      {(data!==null?
         Object.keys(data).map((key,index)=>{
            return( 
            <option value={key}>{key}</option>
            )
         }):null)
         }
         
      </select>
      </div>
      <div className="subContainer">
          <input value={toCurrencyAmount} onChange={(e)=>{
              setToCurrencyAmount(e.target.value);
              setFromCurrencyAmount(toFrom(e.target.value,toCurrency,fromCurrency,data));
          }} placeholder="convert to..." className="inputCurrency"  type="text"  />
          <select onChange={(e)=>{
              setToCurrency(e.target.value);
              setToCurrencyAmount(fromTo(fromCurrencyAmount,fromCurrency,e.target.value,data))
          }} className="selectCurrency"  >
          {(data!==null?
         Object.keys(data).map((key,index)=>{
            return( 
            <option value={key} >{key}</option>
            )
         }):null)
         }
          </select>    
      </div>
  </div>
        </center>
    )
}

function fromTo(amount,fromCurrency,toCurrency,data){
    console.log(amount);
  return Math.round((amount/data[fromCurrency])*data[toCurrency]*1000)/1000;
}

function toFrom(amount,toCurrency,fromCurrency,data){
    return Math.round((amount/data[toCurrency])*data[fromCurrency]*1000)/1000;
}