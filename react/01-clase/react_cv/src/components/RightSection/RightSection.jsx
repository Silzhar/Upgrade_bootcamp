import React from 'react';

import './RightSection.css';

const git = "https://raw.githubusercontent.com/Silzhar/cv-html/master/img/git.png";
const js = "https://raw.githubusercontent.com/Silzhar/cv-html/master/img/js.png" ;
const html5 = "https://raw.githubusercontent.com/Silzhar/cv-html/master/img/html5-2.png";
const node = "https://raw.githubusercontent.com/Silzhar/cv-html/master/img/node.png";

const css3 = "https://raw.githubusercontent.com/Silzhar/cv-html/master/img/css3.png";
const docker = "https://raw.githubusercontent.com/Silzhar/cv-html/master/img/docker.png";
const react = "https://www.venditec.com/wp-content/themes/venditectheme/assets/images/react.png"
const angular = "https://cdn.worldvectorlogo.com/logos/angular-icon.svg"

const mysql = "https://appstore.edgenexus.io/wp-content/uploads/2018/09/mysql-logo.png"
const mongo = "https://i.blogs.es/577c8b/650_1000_mongo_bumper.sh-600x600/1366_2000.png"


class RightSection extends React.Component{
    render(){
        return (
            
            <article className="logos">
                <img src={ git } alt="git-logo" className="logos_img"/>
                <img src={ js } alt="JavaScript-logo" className="logos_img"/>
                <img src={ html5 } alt="html5-logo" className="logos_img"/>  
                <img src={ node } alt="node.js-logo" className="logos_img"/>
                    
                <img src={ css3 } alt="CSS3-logo" className="logos_img"/>  
                <img src={ docker } alt="docker-logo" className="logos_img"/>
                    
                <img src={ react } alt="react-logo" className="logos_img"/>
                <img src={ angular } alt="angular-logo" className="logos_img"/>
                <img src={ mysql } alt="mysql-logo" className="logos_img"/>
                <img src={ mongo } alt="mongodb-logo" className="logos_img"/>
            </article>
        );
    }
}

export default RightSection;
