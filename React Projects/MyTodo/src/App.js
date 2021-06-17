import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      input: "",
      alert:{display:"none"}
    };
  }
  
  addTodo =()=>{
    if(this.state.input===""){
      this.setState({alert:{display:"block"}})
      setTimeout(()=>{
        this.setState({alert:{display:"none"}})
      },2000)
    }else{
    this.setState({list:[...this.state.list,this.state.input]})
    this.setState({input: ""})
    }
  }
  undoTodo = (e)=>{
     //editing parent div
     e.target.parentElement.parentElement.style.backgroundColor="#00aa30";
     e.target.parentElement.parentElement.style.width="100%";
 
     // editing delet button
     e.target.nextElementSibling.nextElementSibling.style.display="inline-block";
 
     // editing edit button
     e.target.nextElementSibling.style.display="inline-block";
 
     // editing undo button
     e.target.style.display="none"
    
  }

  editTodo=(e)=>{
    const newitem = this.state.list.filter((item,index)=>index!==Number(e.target.name));
    this.setState({list:newitem});
    // console.log(this.state.list[e.target.name])
    this.setState({input:this.state.list[e.target.name]})
  }
  deleteTodo = (e)=>{

    //editing parent div
    e.target.parentElement.parentElement.style.backgroundColor="red";
    e.target.parentElement.parentElement.style.width="80%";

    // editing delet button
    e.target.style.display="none"

    // editing edit button
    e.target.previousElementSibling.style.display="none";

    // editing undo button
    e.target.previousElementSibling.previousElementSibling.style.display="inline-block";

   
  }
  
  render() {
    return (
      <div className="container-fluid row mt-5 p-3">
        <div className="col-sm-8 mx-auto shadow-lg text-white ">
          <h1 className="text-center my-3 ">My Todo</h1>
          <div className="row justify-content-between">
            <div className="col-sm-8">
              <input
                type="text"
                value={this.state.input}
                className="form-control"
                placeholder="Write todo ..."
                onChange={e => this.setState({input: e.target.value})}
              />
            </div>
            <div className="col-sm-3">
              <button type="button" className="btn btn-primary px-4" onClick={this.addTodo}>
                Add Todo
              </button>
            </div> 
          </div>
          <div style={this.state.alert} className="alert alert-danger mt-4 mb-3 w-75 mx-auto text-center">Please Enter The Todo !!!</div>
          <div>
              <ul className="list-unstyled mr-3 mt-4" >
                {this.state.list.map(
                  (item,
                  index) => {
                    return (
                      <div key={index} className="d-flex justify-content-between my-2 p-2 shadow-lg" style={{backgroundColor:"#00aa30",width:"100%" ,transitioin:"all",transitionDuration:"2s",margin:"auto"}}>
                      <li>{item}</li>
                      <div className="my-button">
                      <button name={index} style={{display:"none"}} className="btn btn-danger btn-sm mr-2" onClick={this.undoTodo}>Undo</button>
                      <button name={index}  className="btn btn-danger btn-sm mr-2" onClick={this.editTodo}>Edit</button>
                      <button name={index}  className="btn btn-danger btn-sm" onClick={this.deleteTodo}>Delete</button>
                      </div>
                      </div> 
                    );
                  })
                }
              </ul>
            </div>
        </div>
      </div>
    );
  }
}
