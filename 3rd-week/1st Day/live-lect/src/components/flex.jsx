import styled from "styled-components";

export const Flex = styled.div`

    display: flex;
    justify-content: space-between;
    align-item: center;

    & > div:nth-child(1){
        color: red;
    }

    &:hover{
        color: blue;
    }

`