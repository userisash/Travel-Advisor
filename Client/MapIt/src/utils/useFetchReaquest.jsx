import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [err, setErr] = useState(null)
    
    useEffect(() => {
        const getData = async () => {
          try {
            const res = await fetch(url);
            console.log(res);
            if (!res.ok) {
              setErr(res.status)
            }
            const data = await res.json();
            setData(data);
          } catch (err) {
            console.log(err);
            setErr(err.status)
          }
        };
        getData();
      }, []);
      return {data, err }

}

