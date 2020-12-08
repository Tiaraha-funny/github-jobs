import styled from "styled-components";

const MainStyle = styled.main`
  margin: 0;
  padding: 10px;
  display: block;
`;
const Header = styled.header`
  font-size: 20px;
`;

const DisplayJobs = styled.div`
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 20px;
  a .contentes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
  }
`

const CheckBoxStyle = styled.div`
display: grid;
margin-top: 30px;
margin-bottom: 30px;
`

export { MainStyle, Header, DisplayJobs, CheckBoxStyle };
