import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: []
            //    server:process.env.PORT
        }
    }
    componentDidMount = async () => {
        const server = 'http://localhost:3001';
        const allData = await axios.get(`${server}/all`);
        this.setState({
            allData: allData.data
        })

    }


    addFav = async (idx) => {
        const server = 'http://localhost:3001';
        const obj = {
            name: this.state.allData[idx].name,
            img: this.state.allData[idx].img,
        }
        await axios.post(`${server}/addToFav`, obj)
    }

    render() {
        return (
            <>
                <Row xs={1} md={2} className="g-4">
                    {this.state.allData.map((item, idx) => (
                        <Col>
                            <item
                                key={idx}
                                item={item}
                                addFav={this.addFav}
                                idx={idx}
                            />
                        </Col>
                    )
                    )}
                </Row>
            </>
        )
    }
}
export default Home;