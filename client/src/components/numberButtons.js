import "../tabProgressTracker.css"
import { Button } from "@material-ui/core"
import { useState } from "react"

export default function NumberButtons(props) {
  const [buttonColor, setButtonColor] = useState("")
  return (
    <>
      {/* 1-15 buttons */}
      <div className="numberButtons" style={{ display: "flex" }}>
        <Button
          variant="outline"
          size="large"
          style={{
            border: "2px solid grey",
            borderRadius: "50px",
            marginRight: "5px",
            width: "10px",
          }}
          onClick={function (e) {
            setButtonColor((e.target.style.backgroundColor = "lightgreen"))
          }}
        >
          <img src={props.img} alt="number" width="30px" />
        </Button>
      </div>
    </>
  )
}
