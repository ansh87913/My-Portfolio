import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

function Education() {
  return (
    <div>
        <div className="mt-3" style={{textAlign: 'center'}}>
          <h1 className="">
            Education
          </h1>
        </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fbd9ad", border: '3px solid #fbd9ad', padding: '15px', borderRadius: '10px', boxShadow:'1px 1px 1px 1px rgba(145, 77, 161, 0.459)'}}
          contentArrowStyle={{display:"none"}}
          date="2021-2025"
          dateClassName="vertical-timeline-element-date"
          iconStyle={{ 
            background: "#181825", 
            color: "#fbd9ad", 
            width: '20px', 
            height: '20px', 
            marginLeft: '-10px', // Adjust this value to center the icon on the line
            marginTop: '60px'
          }}
        >
          <h4 className="vertical-timeline-element-title fw-bold">
            Bachelor of Technology(Computer Science Engineering)
          </h4>
          <h5 className="vertical-timeline-element-subtitle mt-2">
            Vellore Institute of Technology, Chennai 
          </h5>
          <p>CGPA: 8.72</p>
          <p>
          I am currently in my final year of B.Tech in Computer Science and Engineering, focusing on advanced topics in full stack development, cloud computing, and data structures and algorithms.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fbd9ad", border: '3px solid #fbd9ad', padding: '15px', borderRadius: '10px', boxShadow:'1px 1px 1px 1px rgba(145, 77, 161, 0.459)'}}
          contentArrowStyle={{display:"none"}}
          date="2019 - 2021"
          dateClassName="vertical-timeline-element-date"
          iconStyle={{ 
            background: "#181825", 
            color: "#fbd9ad", 
            width: '20px', 
            height: '20px', 
            marginLeft: '-10px', // Adjust this value to center the icon on the line
            marginTop: '60px'
          }}
        >
          <h4 className="vertical-timeline-element-title fw-bold">
            Higher Secondary Education - CBSE
          </h4>
          <h5 className="vertical-timeline-element-subtitle mt-2">
            Shardein School, Muzaffarnagar
          </h5>
          <p>Percentage: 87.4</p>
          <p>
            Completed my higher secondary education with a focus on the science stream, excelling in subjects such as Physics, Chemistry, and Mathematics.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fbd9ad", border: '3px solid #fbd9ad', padding: '15px', borderRadius: '10px', boxShadow:'1px 1px 1px 1px rgba(145, 77, 161, 0.459)'}}
          contentArrowStyle={{display:"none"}}
          date="2017 - 2019"
          dateClassName="vertical-timeline-element-date"
          iconStyle={{ 
            background: "#181825", 
            color: "#fbd9ad", 
            width: '20px', 
            height: '20px', 
            marginLeft: '-10px', // Adjust this value to center the icon on the line
            marginTop: '60px'
          }}
        >
          <h4 className="vertical-timeline-element-title fw-bold">
            Secondary Education - CBSE
          </h4>
          <h5 className="vertical-timeline-element-subtitle mt-2">
            Shardein School, Muzaffarnagar
          </h5>
          <p>Percentage: 90.2</p>
          <p>
          Completed my secondary education at Shardein School. Gained a solid foundation in core subjects such as Mathematics, Science, and English. Actively involved in school activities and competitions, which helped in developing teamwork and leadership skills.
          </p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Education;
