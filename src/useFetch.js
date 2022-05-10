import{useState,useEffect} from 'react';

const useFetch = (url)=>{

    const[data,setData]= useState(null);
    const[isPending,setIsPeding] = useState(true);
    const [error,setError]= useState(null);

    useEffect(()=>{
        //console.log("Use effect running");
        //console.log(blogs);
        const abortcont=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortcont.signal})
        .then(res=>{
            if(!res.ok){
             throw Error("could not fetch the data...")
            }
            return res.json();
        })
        .then(data=>{
            //console.log (data)
            setData(data);
            setIsPeding(false);
            setError(null)
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log ('Fetch Aborted')
            }
            else{
                setError(err.message)
                setIsPeding(false);
                setData(null)
            }
           
        })
        },1000)
        return ()=> abortcont.abort();
      
    },[url]);

    return {data,isPending,error}
}

export default useFetch;