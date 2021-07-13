import "../tabProgressTracker.css"
import { Button } from "@material-ui/core"
import NumberButtons from "./numberButtons"

export default function TabProgressTracker(props) {
  return (
    <>
      <div className="mainDiv">
        {/* --------Div for three buttons at top-------------- */}
        <div className="topButtons">
          <img
            src="./images/takeScreenshot.png"
            alt="button for take screenshot"
            className="imgWidth"
          />
          <img
            src="./images/helpCenter.png"
            alt="button for take help centre"
            className="imgWidth"
          />
          <img
            src="./images/moreProjects.png"
            alt="button for take more projects"
            className="imgWidth"
          />
        </div>
        {/* div for inner container */}
        <div className="innerContainer2">
          <div className="innerContainer">
            <img src="./images/beginnerCourse.png" alt="beginner course" style={{ width: "20%" }} />
            <span>
              <img src="./images/exportIcon.png" alt="export icon"></img>
              <img src="./images/exportSpreadSheet.png" alt="exportSpreadSheet" />
            </span>
          </div>

          {/* div for students */}
          {props.user.map((user) => {
            return (
              <div className="studentsDiv">
                {/* div for name and projects completed */}

                <div className="completedProjects">
                  <h4>{user.user_name.toUpperCase()}</h4>
                  <img src={user.projects} alt="student info" />
                </div>

                {/* Insert Number Buttons here */}
                <NumberButtons img="./images/1.png" />
                <NumberButtons img="./images/2.png" />
                <NumberButtons img="./images/3.png" />
                <NumberButtons img="./images/4.png" />
                <NumberButtons img="./images/5.png" />
                <NumberButtons img="./images/6.png" />
                <NumberButtons img="./images/7.png" />
                <NumberButtons img="./images/8.png" />
                <NumberButtons img="./images/9.png" />
                <NumberButtons img="./images/10.png" />
                <NumberButtons img="./images/11.png" />
                <NumberButtons img="./images/12.png" />
                <NumberButtons img="./images/13.png" />
                <NumberButtons img="./images/14.png" />
                <NumberButtons img="./images/15.png" />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
