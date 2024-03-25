import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Pixabay() {

    let [data, setData] = useState([])
    let apiKey = "25540812-faf2b76d586c1787d2dd02736"
    let [userInput, setUserInput] = useState("");
    let [category, setCategory] = useState("");
    let [nine, setNine] = useState("9");
    let [pageNumber, setPageNumber] = useState("1");

    console.log(userInput)
    console.log(category)
    console.log(pageNumber)


    let getData = async function () {
        try {
            let res = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${category}&per_page=${nine}&page=${pageNumber}`)
            setData(res.data.hits)

        } catch (error) {
            console.error(error)
        }
    }

    let click = () => {
        setCategory(userInput);
    }

    useEffect(() => {
        getData();
        console.log(data)
    }, [category, pageNumber])

    let next = () => {
        setPageNumber(++pageNumber)
    }

    let prev = () => {
        if (pageNumber <= 1) {
            setPageNumber("1")
        } else {
            setPageNumber(--pageNumber)
        }

    }



    return (
 
    <div style={{width:"auto"}}>
            <Container  >
                <Row >
                    <Col md={4} xl={4} sm={12}>
                        <button onClick={prev}>{'\uD83E\uDC1C'} prev </button>
                    </Col>
                    <Col md={4} xl={4} sm={12}> 
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            <Dropdown.Item onClick={(e) => setCategory("animals")}>Animals</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => setCategory("sports")}>Sports</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => setCategory("work")} >Work</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => setCategory("cars")} >Cars</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => setCategory("flowers")} >Flowers</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                    <Col md={4} xl={4} sm={12}>
                       <button onClick={next}>{'\uD83E\uDC1E'} next</button>
                    </Col>
                </Row>
            </Container>
            <input type='search' placeholder={category} onChange={(e) => setUserInput(e.target.value)}/>
                <button onClick={click}>click</button>

            <Row>
            {data.map(function (item) {
                return (
                    <Col sm={12} md={4} lg={4} style={{marginTop:"5px"}}>
                        <Link to={`/overview/${item.id}`}>
                        <img id='main' src={item.largeImageURL} style={{ height: "300px", width: "300px", border:"solid" , borderRadius:"3px", borderColor:"black" }}/>
                        </Link>
                    </Col>
                )
            })}
            </Row>
            </div>
    
    )
}
// 276014
