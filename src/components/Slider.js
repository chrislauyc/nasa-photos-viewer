import React,{useState} from 'react';
export default function Slider(props){
    const {setSol,maxSol} = props;
    const [slider, setSlider] =useState(0);
    return ( 
    <SliderContainer>
        <SliderStyle type='range' min='0' max={maxSol} value={slider} onChange={(e)=>setSlider(e.target.value)}></SliderStyle>
        <button onClick={()=>{setSol(slider)}}>
            Sol: {slider}
        </button>
    </SliderContainer>
    );
}