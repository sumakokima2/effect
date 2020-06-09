import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return( <Lifecyclecheck /> );
}

const Lifecyclecheck = () =>{
    const [Checkstop,setCheckstop] = useState(true);
    const [Checktext,setChecktext] = useState("stop");

    const stop = () => {
        console.log(Checkstop);
        Checkstop ? setCheckstop(false) : setCheckstop(true);
        Checkstop ? setChecktext("go") : setChecktext("stop");
    }
    if(Checkstop){
        return <div><Lifecycle stop={Checkstop} text = {Checktext}/><button onClick={stop}>{Checktext}</button></div>;
    }
    else{
        return <div><Lifecycle stop={Checkstop} text = {Checktext}/><button onClick={stop}>{Checktext}</button></div>;
    }
}

const Lifecycle = (props) =>{
    const [today,setToday] = useState(new Date().toLocaleTimeString());
    
    const tick= () =>{
        console.log(props.stop);
        setToday(new Date().toLocaleTimeString());
    }
    
    useEffect(() => {
        if(props.stop){
            const timer = setInterval(() => {
              tick()
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [props.stop]);

    useEffect(() => {
        console.log("マウントの時のみ実行");
    }, []);

    useEffect(()=>{
        console.log("componentが呼ばれるたびに実行");
    });

    return <div>{today}</div>;
}
ReactDom.render(
    <App />,
    document.querySelector("#root")
);