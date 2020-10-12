import React from 'react';

import Card from '../components/Card';

import aws from '../assets/images/aws.png';
import asp from '../assets/images/asp.jpg';
import js from '../assets/images/js.png';
import sql from '../assets/images/sql.png';
import java from '../assets/images/javs.png';
import android from '../assets/images/android.png';
import node from '../assets/images/node.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'AWS',
                    subTitle: 'Solution Architect',
                    imgSrc: aws,
                    selected: true
                },
                {
                    id: 1,
                    title: 'ASP.NET',
                    subTitle: 'Application Developer',
                    imgSrc: asp,
                    selected: false
                },
                {
                    id: 2,
                    title: 'JavaScript',
                    subTitle: 'Who does not love a good Front-end?',
                    imgSrc: js,
                    selected: false
                },
               
                {
                    id:3,
                    title:'Java',
                    subTitle: 'This never gets old',
                    imgSrc: java,
                    selected:false
                },
                {
                    id:4,
                    title:'SQL',
                    subTitle: 'For Efficient Storage',
                    imgSrc: sql,
                    selected:false
                },
                {
                    id:5,
                    title:'Android',
                    subTitle: 'Developed Rich UI applications',
                    imgSrc: android,
                    selected:false
                },
                {
                
                    id:6,
                    title:'Node & Express.js',
                    subTitle: 'Modular Web applicationss',
                    imgSrc: node,
                    selected:false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;