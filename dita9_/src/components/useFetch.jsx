import React,{useState, useEffect} from 'react'

function useFetch(url) {

    const [list, setList] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

      useEffect(() => {
         setTimeout(() => {
        
            fetch(url)
       
        .then((response) => 
          response.json())
        .then((data) => {
          setLoading(false);
         setList(data); 
      })
          
        .catch((error) => {
          setError('Error fetching data:',  error  );
          setLoading(false);
        });  
      } , 1000);     
      }, []);


  return {
    list,
    error,
    loading
  }
    
  
}

export default useFetch