import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import { MdDelete } from "react-icons/md";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

export default function ToDoIcons({modifyToDo, ACTIONS, item, changeEdit}) {

    return (
        <Container>
        <Row className = "px-5">
          <div className = "w-100 d-flex justify-content-between">
            <h2>
              <MdDelete onClick = {() => {
                modifyToDo({
                  type: ACTIONS.DELETE,
                  payload: {'content': item}
                })
              }}/>
            </h2>
            <h2>
              <FaRegCopy onClick = {() => {
                axios.post(`/study/duplicate/${item.id}`).then(res => {
                  modifyToDo({
                    type: ACTIONS.INIT,
                    payload: {'newToDo': res.data}
                  })
                })
 
                }}/>
            </h2>
            <h2><CiEdit onClick = {changeEdit} /></h2>
            <h2>
              <FaCheck onClick = {() => {
                modifyToDo({
                  type: ACTIONS.COMPLETE,
                  payload: {'content': item}
                })
              }}/>
            </h2>
        </div>
        </Row>
      </Container>
    )
}