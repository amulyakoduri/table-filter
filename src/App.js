import { useState } from "react";

const tableData = [
    { id:"1", date:"01-03-2023", amount:"56"},
    { id:"2", date: "02-03-2023" , amount:"76"},
    { id:"3", date: "03-03-2023",  amount:"84"},
    { id:"4", date: "04-03-2023",amount:"65"},
    { id:"5", date: "05-03-2023",amount:"89"},
  ];

  
function App() {
  const [date , setDate] = useState();
  const [data, setData] = useState(tableData);

  const onChangeDate = (event) =>{
        setDate(event.target.value);
  }

  const handleClick = () =>{
    const sort =  tableData.sort((a ,b)=>{
       return  b.amount - a.amount
    }).map(data => {
           return data;
     })
     setData(sort);
  }

  const  handlefilter = () =>{
    const fullData = tableData.filter( table =>{
            const fullDate = date.split("-");
            let y  = fullDate[0]
            let m = fullDate[1]
            let d   = fullDate[2]
            const dateFormat = d+"-"+m+"-"+y;
            console.log(dateFormat);
            console.log(table.date);
            return table.date === dateFormat;
    });

    console.log(fullData)
     setData(fullData);
  }

 

  return (
    <div>
      <h1>Table</h1>
      <div>
        <input type="date" onChange={onChangeDate} />
        <button  onClick={handlefilter}>
          filter
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th><button onClick={handleClick}>Amount</button></th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas,index) => {
            return (
              <tr key={index}>
                <td>{datas.date}</td>
                <td>{datas.description}</td>
                <td>{datas.name}</td>
                <td>{datas.amount}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
