import React,{useState,useEffect} from "react";
import Tabledata from "../Tabledata.json";
import Duplicate from "../Duplicate.json";
import Expand from "../expand/Expand"
import "./Table.css";


const Table = () => {

 const [currentPage,setCurrentPage]=useState(1)
 const recodsPerPage=5;
 const lastIndex=currentPage * recodsPerPage;
 const firstIndex = lastIndex - recodsPerPage;
 const recods = Tabledata.slice(firstIndex, lastIndex)
 const numberPages = Math.ceil(Tabledata.length/recodsPerPage)
 const number=[...Array(numberPages + 1).keys()].slice(1)
 const siblingCount=1;
 const DOTS = '...';

 const [sumNumber,setSumNumber]=useState(false)
  
 
 
 
  
const handleprev=()=>{

  if(currentPage !== 1){
    setCurrentPage(currentPage - 1)
   }

}

const handlenumber=(id)=>{
  setCurrentPage(id)
}
const handlenext=()=>{
  if(currentPage !== numberPages){
    setCurrentPage(currentPage + 1)
   }
}


 const sum = Tabledata.reduce((accumulator, currentObject) => {
  return accumulator + currentObject.device_action_item;
}, 0);

console.log(sum)

const handlesum = () =>{
  setSumNumber(!sumNumber)
}

  
  return (
    <div className="table_component">
    <div className="container">
      <div className="sub_div">
        <table>
          <thead>
            {sumNumber ? <span className="circle_click" onClick={handlesum} ><span>{sum}</span></span>:
          <span className="circle" onClick={handlesum} ><span>{sum}</span></span>}
            <tr>
              {Duplicate.map((item,i) => (
        
                
                <th className="table_head">{item.title}</th>
                
              ))}
            </tr>
          </thead>
          <tbody>
            {recods.map((row, i) => (
              <tr className={i % 2 === 0 ? "white" : "gray"}>
                {Duplicate.map((colum, ind) => (
                  <td>
                    {row.device_action_item > 0 && ind === 0 && (
                      <div class="tooltip">{row.device_action_item}
                      <ul class="tooltiptext">
                        <li>{row.device_action_item_txt.split("|*")}</li>
                      </ul>
                      </div>
                    
                      
                    )}
                    {row[colum.access]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
   
      <div className="pagi">
      <span onClick={handleprev} >prev</span>
      {number.map((num)=>(
        <button className="btn_div"  onClick={() => handlenumber(num)} >{num}</button>
      ))}
       <span onClick={handlenext} >next</span>
       </div>
       </div>
  
    </div>
    {sumNumber ? <Expand/> :""}
    </div>
  );
};

export default Table;
