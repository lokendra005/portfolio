import React from "react";
import "./css_modules/Education.css";

const info=[
  {
    logo: "https://assets-v2.scaler.com/assets/scaler/svg/scaler-logo-new-15cddca2e0196e677600f6671b42a288bdc89c398adc29fe82b7441503c4b129.svg.gz",
    position: 'Undergrad',
    startDate: new Date(2023, 7),
    endDate: new Date(2027, 7),
    summary: [
      'Degree of BSC in Computer Science from Bits-Pilani.',
      'Learning DSA and Web Development.',
    ],
  },

  
];
function getdate(date){
  let monthName = date.toLocaleString('default', { month: 'long' }); 
let year=date.getFullYear(); 
return `${monthName} ${year}`;

}
function EducationSummary({ summary }) {
  return (
    <ul >
      {summary.map((item, index) => (
        <li className="sumary-li"  key={index}>{item}</li>
      ))}
    </ul>
  );
}
function Education_nav(props){
  return(
  <div className="edu-nav">
    <div className="edu-info">
    <img src={props.logo} width="102" height="60"/> 
    <div className="summary-points">
    <EducationSummary summary={props.summary} />
    <h2 className="position">{props.position}</h2>
    </div>
    <p className="sumary-li" >{getdate(props.startDate)}-{getdate(props.endDate)}</p>
    </div>

    


  </div>
  );
}

export default function Education() {
  return (
    <div className="edu-container">
                  <div className="About">
                <span className="span-btn">Education</span>
                <p className="description-txt" >Currently Persuing Undergrad at Scaler School Of Technology</p>
            </div>


      <div className="edu-childs">
      {info.map((item)=>(
         <Education_nav
         logo={item.logo}
         position={item.position}
         startDate={item.startDate}
         endDate={item.endDate}
         summary={item.summary}
       />
      ))}
      </div>

    </div>
  );



}