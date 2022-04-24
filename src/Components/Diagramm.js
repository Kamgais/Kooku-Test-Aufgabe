import React,{useEffect,useState} from 'react';
import './Diagramm.css'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


function Diagramm ({value}) {

     const[state,setState] = useState();
  
     
    useEffect(()=>{

       async  function FetchData() {
          const res = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json') 
          setState ( await res.json())
          

       }
        
      FetchData()

    },[])


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      var data = {
        labels: value.map((item)=> item),
        datasets: [
            {
                label: ' ',
                data: value.map(item=> state.bpi[item]),
                borderColor: ['rgb(73, 5, 5)'],
                backgroundColor: ['rgb(73, 5, 5)'],
                pointBackgroundColor: 'rgb(73, 5, 5)',
                pointBorderColor: 'rgb(73, 5, 5)'
            }
        ]
    }
   


   
      

    return (
    <div className='diagramm'>
       <Line
       className='line'
        data={data}
       height={400}
       width={600}
       options={{
        maintainAspectRatio: false,
        plugins: {
        
          title: {
            display: true,
            text: 'BITCOIN ANALYSTICS',
          },
        },
      }
     }/>
    </div>
    );
}


export default Diagramm;



