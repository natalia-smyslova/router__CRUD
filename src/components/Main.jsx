import { useEffect, useState } from "react";
import Header from "./Header";
import Posts from "./Posts";

function Main(){
    const [list, setList] = useState([]);

    useEffect(() => {
      console.log(import.meta.env.VITE_URL);
      fetch(import.meta.env.VITE_URL + '/posts')
      .then(res => res.json())
      .then(json => setList(json));
    }, []);

    return (
        <>
          <Header />
          <Posts list={list}/>
        </>
      );

}
export default Main