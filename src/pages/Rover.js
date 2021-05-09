import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {BASE_URL} from "../constants";
// import Slider from '../components/Slider';
// import Filter from './components/Filter';
export default function Rover(props){
    const {data, fetchRoverData} = props;
    const {rover} = useParams();
    useEffect(()=>{
        fetchRoverData('curiosity',`${BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?sol=0`);
        fetchRoverData('opportunity',`${BASE_URL}/mars-photos/api/v1/rovers/opportunity/photos?sol=0`);
        fetchRoverData('spirit',`${BASE_URL}/mars-photos/api/v1/rovers/spirit/photos?sol=0`);
        fetchRoverData('curiosity_manifest',`${BASE_URL}/mars-photos/api/v1/manifests/curiosity?`);
        fetchRoverData('opportunity_manifest',`${BASE_URL}/mars-photos/api/v1/manifests/opportunity?`);
        fetchRoverData('spirit_manifest',`${BASE_URL}/mars-photos/api/v1/manifests/spirit?`);
    },[]);
    if(!data[rover]||!data[`${rover}_manifest`]){
        return <div></div>;
    }
    const {photos} = data[rover];
    const {photo_manifest} = data[`${rover}_manifest`];
    const {landing_date,launch_date,max_sol,status,total_photos} = photo_manifest;
    return(
        <div className='rover'>
                {/* <Slider maxSol={page.maxSol} setSol={page.setSol} /> */}
                <div>
                    <p>Landing Date: {landing_date}</p>
                    <p>Launch Date: {launch_date}</p>
                    <p>Max Sol: {max_sol}</p>
                    <p>Status: {status}</p>
                    <p>Total Photos: {total_photos}</p>
                </div>
                <div>
                {
                    photos.map((photo,i)=>{
                        return (
                            <img key={i} src={photo.img_src} alt={`rover photo: ${photo.id}`}></img>
                        );
                    })
                }
                </div>
        </div>
        );
    }