import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,Row } from 'react-bootstrap';


class Item extends React.Component {
    render() {
        return (
            <>
              <Row xs={1} md={2} className="g-4"></Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.img} />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        
                        <Button onClick={()=>this.props.addFav(this.props.idx)} variant="primary">Add-to-favorite</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
export default Item;