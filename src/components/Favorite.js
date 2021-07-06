import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpdateForm from './UpdateForm';


class Favorite extends React.Component{
     constructor(props){
         super(props);
         this.state={
             FavArr:[],
             show:false,
             index:-1,
             name:'',
             img:''
         }
     }


componentDidMount = async () => {
    const server = 'http://localhost:3001';
    const favData = await axios.get(`${server}/getFav`);
    this.setState({
        FavArr: favData.data
    })
}

delete=async (id) => {
    const server = 'http://localhost:3001';
    const favData = await axios.delete(`${server}/deleteFav?id=${id}`);
    this.setState({
        FavArr:favData.data
    })
}

showUpdateForm=(idx)=>{
    this.setState({
        show:true,
        index:idx,
        name: this.state.FavArr[idx].name,
        img: this.state.FavArr[idx].img,
    })
}

handleClose=()=>{
    this.setState({
        show:false
    })
}

updateData=async(e)=>{
    e.preventDefault();
    const obj={
        name:e.target.strDrink.value,
        img:e.target.strDrinkThumb.value,
        id:this.state.FavArr[this.state.index]['idDrink']
    }


const server = 'http://localhost:3001';
const newData= await axios.put(`${server}/updateFav`,obj)
this.setState({
    favArr:newData.data,
    show:false
})
}

render (){
    return(
        <>
         <Row xs={1} md={2} className="g-4">
        
             {this.state.favArr.map((item,idx)=>(
                             <Col>
                             <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.img} />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        
                        <Button onClick={()=>this.props.addFav(this.props.idx)} variant="primary">Add-to-favorite</Button>
                    </Card.Body>
                </Card>
                </Col>
             )) 
}
</Row>

<UpdateForm
show={this.state.show}
handleClose={this.handleClose}
name={this.state.name}
img={this.state.img}
updateData={this.updateData}/>
        </>
    )
}
}
export default Favorite;