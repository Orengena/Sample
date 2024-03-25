import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';

export default function
    () {

    let [data, setData] = useState([])
    let apiKey = "25540812-faf2b76d586c1787d2dd02736"
    let { id } = useParams()
    let back = useHistory();

    let getData = async function () {
        try {
            let res = await axios.get(`https://pixabay.com/api/?key=${apiKey}&id=${id}`)
            setData(res.data.hits)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getData()
        console.log(data)
    }, [])

    return (
        <div>
            {data.map(function (item) {
                return (
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.webformatURL} />
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Views: {item.views}</ListGroup.Item>
                                <ListGroup.Item>Downloads: {item.downloads}</ListGroup.Item>
                                <ListGroup.Item>Collection: {item.collections}</ListGroup.Item>
                                <ListGroup.Item>Comments: {item.comments}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button onClick={() => back.goBack()}>Back</Button>
                            </Card.Body>
                        </Card>
                    </div>


                )
            })}
        </div>
    )
}
