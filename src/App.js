import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';

const App = () => {
    const [tesla, setTesla] = React.useState([]);
    const getTesla = async () => {


        try {
            const result = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-05-10&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f')
            setTesla(result.data.articles)
            console.log('ttttt', result.data.articles)
        } catch (err) {
            console.log('-----', err)
        }
    }

    useEffect(() => {
        getTesla()
    }, []);


    return (
        <container>
            <Row>
                {tesla.map((tsl, index) => (
                    <Col className={'mt-3'}>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={tsl.urlToImage === null ? "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg" : tsl.urlToImage} />
                            <Card.Body>
                                <Card.Title><h1>{tsl.title.slice(0, 10)}</h1></Card.Title>
                                <Card.Text>
                                    {tsl.content.slice(0, 80)}
                                    <p>{tsl.publishedAt}</p>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}  </Row>
        </container>


    );
};

export default App;