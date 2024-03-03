import React from "react";
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";


    const Education=()=>{
           return(
            <>
                 <div className="education">
                 <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                               Education Details
                            </h2>
                               <hr />
                               <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">class 10(86.5%)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              WBBSE
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black",padding:4 }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">class 12(86.2%)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              WBCHSE
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019-23"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.TECH,CSE(8.1 CGPA)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              HIT,KOLKATA
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="FUTURE"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">M.TECH(FUTURE PLAN)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              GOING TO RESEARCH FILIED ON QUANTAM PHYSICS AND COMPUTING
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>

                         </div>
            </>
           )
    }
        export default Education;