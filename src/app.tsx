import React from "react";
import minam from "../static/basic-data"
import hoyeong from '../static/hoyeong'
interface textnode {
  textnode : string
}
import UlLi from './ulli'

const Minam : React.FC<textnode> = ({textnode}) => {
  return (
    <h1>{textnode}</h1>
  )
}

const App: React.FC = () => {
  return (
    <>
      <div>Hello World!</div>
      <Minam textnode={minam} />
      <UlLi listItem={hoyeong} />
    </>
  );
};

export default App;