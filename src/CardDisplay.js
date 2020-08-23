import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './CardDisplay.css'

class CardDisplay extends Component {
    render(){
        return(
            <Card id = "cardIndividual">
                <Card.Img src = {this.props.urlToImage} id = "image"/>
                <Card.Body id = "cardText">
                    <Card.Title id = "title">{this.props.title}</Card.Title>
                    <Card.Text id = "description">
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
export default CardDisplay;