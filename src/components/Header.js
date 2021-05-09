import React from 'react';
import {Link,useRouteMatch} from 'react-router-dom';
const links = [
    {text:'Home',path:'/'},
    {text:'Curiosity',path:'/rovers/curiosity'},
    {text:'Opportunity',path:'/rovers/opportunity'},
    {text:'Spirit', path:'/rovers/spirit'}
]
function Header(){
    const isRoot = useRouteMatch('/').isExact;
    const match = useRouteMatch('/rovers/:rover');
    function getH1(isRoot,match){
        if(isRoot){
            return <h1>Astronomy Photo of the Day</h1>;
        }
        else{
            if(match.params.rover==='curiosity'){
                return<h1>Curiosity</h1>;
            }
            else if(match.params.rover==='opportunity'){
                return<h1>Opportunity</h1>;
            }
            else if(match.params.rover==='spirit'){
                return<h1>Spirit</h1>;
            }
            return<h1>rover</h1>;
        }
    };
    return(
        <header>
            {getH1(isRoot,match)}
            <nav>
            {                
                links.map((link,i)=>{
                    return(
                        <Link to={link.path} key={i}>{link.text}</Link>
                    );
                })
            }
            </nav>
        </header>
    );
}
export default Header;