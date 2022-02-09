import './App.css';
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 2rem;
  border:1px solid;
  border-color: red;

  h1{
    color: blue;

  }
  h2{
    color:red;

    @media all and (max-width: 620px){
      color: green;
    }
  }
`;

const A = styled.a`

text-decoration: none;
font-size: 24px;
color: ${({color})=> color === "yellow" ? "yellow" : "aqua"};

`


function App() {
  return (

    <div className="App">

      <Wrapper>
        <A color='green' href='https://www.google.com'>goto google</A>
        <h1>Hello sid</h1>
        <h2>Hello patil</h2>
      </Wrapper>
      
      
    </div>
  );
}

export default App;
