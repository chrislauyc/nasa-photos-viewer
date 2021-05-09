import React from 'react';
function APOD(props){
    const {data} = props;
    function displayMedia(type,url,alt){
        if(type==='video'){
            return(
                <iframe src={url}></iframe>
            );
        }
        else if(type==='image'){
            return(
                <img src={url} alt={alt}></img>
            );
        }
        else{
            console.log('unknown media type',type);
        }
    }
    if(!data){
        return <div>...loading...</div>;
    }
    return(
        <div className='container'>
            <div className='explanation'>{data.explanation}</div>
            {displayMedia(data.media_type,data.url,data.title)}
        </div>
    );
}
export default APOD;