import styled from "styled-components";

// export const Button = ({children}) => {
//   return (
//     <button
//       style={{
//         border: "none",
//         background: "teal",
//         borderRadius: "6px",
//         color: "white",
//         padding: "5px"
//       }}
//     >
//       {children}
//     </button>
//   );
// };

 export const Button = styled.button`
    border: 1px solid teal;
    background: ${({theme})=> (theme === "light" ? "white" : "teal")};
    border-radius: 6px;
    color: ${({theme})=> (theme === "light" ? "teal" : "white")};
    padding: 5px;

    &:hover{
        color:black
    }
    
`;
