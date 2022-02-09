
import styled from "styled-components"

const MakeTable = styled.table`
  margin: 6% auto auto auto;
  caption-side: top;
  border: none;
  /* width:500px; */
  border-bottom: 5px solid rgb(1, 153, 123);
  border-collapse: collapse;
  /* box-shadow: 5px 5px 8px 5px #888888; */

  th {
    background-color: rgb(1, 153, 123);
    border-radius: 5px 5px 0 0;
    color: white;
    font-size: 2vw;
    font-weight: 500;
    width: 300px;
    height: 120px;
  }

  td {
    padding: 5px 10px;
    /* color: rgb(16, 17, 29); */
    font-size: 2vw;
    /* font-weight:400; */
  }
  tbody tr {
    height: 120px;
    :nth-of-type(even) {
      background-color: rgb(242, 242, 243);
      /* border: 5px solid rgb(49, 19, 49); */
    }
    :hover {
      color: rgb(1, 153, 123);
      cursor: pointer;
      font-weight: 600;
    }
  }
`;


export const Table = () => {

    const arr = [
      {
        rank: 1,
        name: "Domenic",
        points: "88,110",
        Team: "dcode"
      },
      {
        rank: 2,
        name: "Sally",
        points: "72,400",
        Team: "students"
      },
      {
        rank: 3,
        name: "Nick",
        points: "52,300",
        Team: "dcode"
      }
    ];

    return (
        

        <MakeTable>

           <table>
               <thead>
                   <tr>
                       <th>Rank</th>
                       <th>Name</th>
                       <th>Points</th>
                       <th>Team</th>
                   </tr>
               </thead>

               <tbody>

                   {
                       arr.map(({rank, name, points, Team}, index)=>{
                           return (
                               <tr key={index} >
                                   <td>{rank}</td>
                                   <td>{name}</td>
                                   <td>{points}</td>
                                   <td>{Team}</td>
                               </tr>
                           )
                       })
                   }
                   
               </tbody>
           </table>
        </MakeTable>
            
        
    )

}