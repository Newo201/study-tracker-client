import { Container, Row} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { FaRegCopy } from "react-icons/fa";

export default function CopyOnly({modifyToDo, ACTIONS, item}) {

    return (
        <Container>
        <Row className = "px-5">
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
        </Row>
        </Container>
    )
}