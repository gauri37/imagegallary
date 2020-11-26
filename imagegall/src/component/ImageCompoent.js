import React, { Component } from 'react';
import './style.css';
import RowItems from './divItems';

class ImageCompoent extends Component {

    constructor()
    {
        super();
        this.state={
            imgData:[
                {id: 1,imgUrl: 'https://wallpaperim.net/_data/i/upload/2014/09/26/20140926506160-99c81d45-la.jpg'},
            {id: 2,imgUrl:"https://i.pinimg.com/736x/11/2b/74/112b746a2182417b2a947d949798c968.jpg"},
            {id: 3,imgUrl:"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg"},
            {id: 4,imgUrl:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"},
        ],
            currentur:""
        };
    }
    inputHandler(){

    }

    addItem(){

    }
    render(){
        return (
            <div>
            <form onSubmit={this.addItem}>
                <input type="text" placeholder="Enter the URL" name="currUrl" 
                value={this.state.currUrl} onChange={this.inputHandler}></input>
            
            <button type="submit" id="btn">Add</button>
            </form>
            <div className="center">
                <RowItems Items={this.state.imgData}></RowItems>
            </div>
            </div>
        )
    }
}
export default ImageCompoent;