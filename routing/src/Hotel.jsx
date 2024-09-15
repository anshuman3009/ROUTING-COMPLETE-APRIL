import { useParams } from "react-router-dom";
function Hotel()
{
    let xyz=useParams();
    // console.log(xyz);
    // console.log(xyz.hn);
   let data=[" HOTEL",  "LEELA" ,"TAJ" ,"RADISON"] 
  return(
    <>
    <h1>WELCOME TO HOTEL -{ data[xyz.hn]} </h1>
    </>
  )
}

export default Hotel;