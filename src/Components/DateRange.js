import React ,{useRef,useState} from 'react';
import Diagramm from './Diagramm';
import './DateRange.css'




function DateRange() {



    
     


          

/*--------------------------DefaultValues--------------------------*/

    var d = new Date();
    var defaultValue1 = `${d.getFullYear()}-${d.getMonth() +1 <10 ? `0${d.getMonth() +1 }` : d.getMonth() +1 }-${d.getDate() <10 ? `0${d.getDate() }` : d.getDate() }`
    var defaultValue2 ;

    if(d.getDate()>10){
      
        defaultValue2 = `${d.getFullYear()}-${d.getMonth() +1 <10 ? `0${d.getMonth() +1 }` : d.getMonth() +1 }-${d.getDate() -10 <10 ? `0${d.getDate() -10 }` : d.getDate() -10 }`
       
    }

    else {
        let counter = 10 ;
        let days = d.getDate()
       
        while(days > 0){
            days --;
            counter --;
        }

        if(d.getMonth() === 1 || d.getMonth() === 3 ||d.getMonth() === 5 || d.getMonth() === 7 || d.getMonth() === 8 || d.getMonth() === 10 || d.getMonth() === 0){

            defaultValue2 = `${d.getFullYear()}-${d.getMonth()  <10  && d.getMonth !== 0? `0${d.getMonth() }` : d.getMonth() === 0? 12 : d.getMonth() }- 0${31-counter }`
        }

        else if(d.getMonth() === 4 || d.getMonth() === 6 ||d.getMonth() === 9 || d.getMonth() === 11){
            defaultValue2 = `${d.getFullYear()}-${d.getMonth()  <10  && d.getMonth !== 0? `0${d.getMonth() }` : d.getMonth() === 0? 12 : d.getMonth() }- 0${30-counter }`
        }

        else if(d.getMonth() === 4){
            defaultValue2 = `${d.getFullYear()}-${d.getMonth()  <10  && d.getMonth !== 0? `0${d.getMonth() }` : d.getMonth() === 0? 12 : d.getMonth() }- 0${28-counter }`


        }



    }

  
     /*-------------useState----------------*/

  
    const [state, setstate] = useState(defaultValue2);
    const[range,setRange] = useState(defaultValue1)

    const [value, setValue]  = useState([]);

         
    
    /*-------useRefs------------*/
    
    let inputBeginn = useRef();
    let inputEnd = useRef();

    

  
 /*---------------method()-handleChange()----------------------*/
    const handleChange = ()=>{
       
      setstate(inputBeginn.current.value)
      setRange(inputEnd.current.value)

      

    }



/*---------------------method()-handleSubmit()----------------------*/

    const handleSubmit = (e) =>{
       e.preventDefault();
       const date1 = new Date(state);
       const date2 = new Date(range);
       console.log(date1)
       console.log(date2)
       const intervall = (date2.getDate() - date1.getDate()) +1;
       console.log(intervall)
       
       const newRange = [];
      

       if((date2.getMonth()+1) === (date1.getMonth()+1)){
          
           for(let i = 0 ; i< intervall ; i++){
                
            newRange.push(`${date1.getFullYear()}-${date1.getMonth() +1 <10 ? `0${date1.getMonth() +1 }` : date1.getMonth() +1 }-${date1.getDate()+i <10 ? `0${date1.getDate() +i}` : date1.getDate() +i}`)


               
           
           
                }

                setValue(newRange);
                newRange = [];
               

               

          
       }

       else if((date2.getMonth()+1) > (date1.getMonth() +1)){
           

        if((date1.getMonth()+1) === 1 || (date1.getMonth()+1) === 3 || (date1.getMonth()+1) === 5 || (date1.getMonth()+1) === 7 || (date1.getMonth()+1) === 8 || (date1.getMonth()+1) === 10 || (date1.getMonth()+1) === 12 ){
        

            for(let i = 0 ; i<= 31 - (date1.getDate()) ; i++){
                
                newRange.push(`${date1.getFullYear()}-${date1.getMonth() +1 <10 ? `0${date1.getMonth() +1 }` : date1.getMonth() +1 }-${date1.getDate()+i <10 ? `0${date1.getDate() +i}` : date1.getDate() +i}`)
            }

            for(let i=1; i<=date2.getDate() ; i++){
                
                newRange.push(`${date2.getFullYear()}-${date2.getMonth() +1 <10 ? `0${date2.getMonth() +1 }` : date2.getMonth() +1 }-${i <10 ? `0${i}` : i}`)
        }

        setValue(newRange);
        newRange = [];


       }

       else if((date1.getMonth()+1) === 4 || (date1.getMonth()+1) === 6 || (date1.getMonth()+1) === 9 || (date1.getMonth()+1) === 11 ){

        for(let i = 0 ; i<= 30 - (date1.getDate()) ; i++){
                
            newRange.push(`${date1.getFullYear()}-${date1.getMonth() +1 <10 ? `0${date1.getMonth() +1 }` : date1.getMonth() +1 }-${date1.getDate()+i <10 ? `0${date1.getDate() +i}` : date1.getDate() +i}`)
        }

        for(let i=1; i<=date2.getDate() ; i++){
            
            newRange.push(`${date2.getFullYear()}-${date2.getMonth() +1 <10 ? `0${date2.getMonth() +1 }` : date2.getMonth() +1 }-${i <10 ? `0${i}` : i}`)
    }


    setValue(newRange);
    newRange = []




       }

       else if((date1.getMonth()+1) === 2){

        for(let i = 0 ; i<= 28 - (date1.getDate()) ; i++){
                
            newRange.push(`${date1.getFullYear()}-${date1.getMonth() +1 <10 ? `0${date1.getMonth() +1 }` : date1.getMonth() +1 }-${date1.getDate()+i <10 ? `0${date1.getDate() +i}` : date1.getDate() +i}`)
        }

        for(let i=1; i<=date2.getDate() ; i++){
            
            newRange.push(`${date2.getFullYear()}-${date2.getMonth() +1 <10 ? `0${date2.getMonth() +1 }` : date2.getMonth() +1 }-${i <10 ? `0${i}` : i}`)
    }


    setValue(newRange);
    newRange = []

       }

       }

      
    }


   
    return (
         <>
         
    <form onSubmit={handleSubmit}>

<input type="date"  name="date-start"
         
         ref={inputBeginn}
         value = {state}
         
         onChange = {handleChange}
         className = "first-input"
       
       min={`${d.getFullYear()}-${d.getMonth() +1 <10 ? `0${d.getMonth() }`  : d.getMonth()  }-${d.getDate() <10 ? `0${d.getDate()}` : d.getDate()}`}
       max={`${d.getFullYear()}-${d.getMonth() +1 <10 ? `0${d.getMonth() + 1}`  : d.getMonth() +1 }-${d.getDate() <10 ? `0${d.getDate()}` : d.getDate()}`}/>



<input type="date"  name="date-start"
       
       ref={inputEnd}
       value = {range}
       
       onChange = {handleChange}
       className = "second-input"
       min= {state}
       max={`${d.getFullYear()}-${d.getMonth() +1 <10 ? `0${d.getMonth() + 1}`  : d.getMonth() +1 }-${d.getDate() <10 ? `0${d.getDate()}` : d.getDate()}`}/>


        <button className='form-btn'>Render</button>
      
    </form>

    <Diagramm  className="diagramm" value = {value}/>

    </>
    );


    }



export default DateRange;