const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(cors())

//----- If need to get data from database missionx------
// const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:,
//   database:"missionx"
// })

// db.connect(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Connected to database")
//   }
// })

app.get("/", function (req, res) {
  //--------If need to get data from database missionx----------
  // db.query("SELECT * FROM users",function(err,result){
  //   res.send(result);
  // })

  //hardcoded for mission4
  res.send([
    { user_name: "Aiden Andrews", key: "111", projects: "./images/4ProjectsCompleted.png" },
    { user_name: "Courtney Bristol", key: "222", projects: "./images/1ProjectsCompleted.png" },
    { user_name: "Nagini Cortes", key: "333", projects: "./images/4ProjectsCompleted.png" },
    { user_name: "Rawiri Fletcher", key: "444", projects: "./images/7ProjectsCompleted.png" },
  ])
})

app.listen(3001)
