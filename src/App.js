import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button, Row, Col } from "reactstrap"
import { useTranslation, Trans } from "react-i18next"


function App() {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList") || "[]" ) )
  //useState( <== this will create taskList and setTaskList with default value the first parameter
    //JSON.parse( <== this will parse the string that it receives and convert it into a js object
      //localStorage.getItem("taskList") || "[]" ) ) <== load from localStorage the taskList. If taskList is NULL or undefined, return "[]" 
  // state = {
  //   task: "",
  //   taskList: []
  // }
  const addNewTask = () => {
    const currentList = [...taskList, task]
    setTaskList(currentList); 
    setTask("")

    localStorage.setItem("taskList", JSON.stringify(currentList))
  }

  const { t, i18n } = useTranslation() 

  const count = taskList.length;

  return (
    <div className="container">
      <Button onClick={() => i18n.language === "en" ? i18n.changeLanguage("it") : i18n.changeLanguage("en") } >Change Language </Button>
      <h1>{t("welcome")}</h1>
      <Trans i18nKey="tasksMessage" count={count}>
         <strong >{{count}}</strong> <a href="/msgs">Go to messages</a>.
      </Trans>
      {/* <h2>{t("tasksMessage")}</h2> */}
      <Row>
        <Col>
          <Input type="text" placeholder="new task" value={task} onChange={(e) => setTask(e.target.value)} />
        </Col>
        <Col>
          <Button color="primary" onClick={addNewTask}>Add new Task </Button>
        </Col>
      </Row>
      <Row>
        <ul>
          {taskList.map((t, i)=> (<li key={i} onClick={() => setTaskList(taskList.filter(x => x !== t))}>{t}</li>) )}
        </ul>
      </Row>
    </div>
  );

  
}

export default App;
