import React from 'react';
import './style.css';
import RowItems from './divItems';

export default class ImageCompoent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            imgData:[ 
                {id: 1,imgUrl: 'https://wallpaperim.net/_data/i/upload/2014/09/26/20140926506160-99c81d45-la.jpg'},
            {id: 2,imgUrl:"https://i.pinimg.com/736x/11/2b/74/112b746a2182417b2a947d949798c968.jpg"},
            {id: 3,imgUrl:"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg"},
            {id: 4,imgUrl:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"},
             ],
            currUrl: ""
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    inputHandler(e){
        
        this.setState({
            [e.target.name]:e.target.value // currUrl : e.target.vlaue ["currUrl"] ; value
        }) 
       
    }

    addItem(e)
    {
        e.preventDefault();
        
        const newImg = {
            Id: this.state.imgData.length + 1,
            imgUrl :  this.state.currUrl
        }

        if(newImg.imgUrl.trim()!=="")
        {
            const newImgData = [...this.state.imgData,newImg];

            this.setState({
                imgData : newImgData,
                currUrl : "",
              
            })
        }
        else
        {
            alert("Please paste IMG URL");
        }

        
    }

    deleteItem(key)
    {
        const filteredItem = this.state.imgData.filter(item => item.Id!==key);
        this.setState({
            imgData: filteredItem
        });
    }

    render(){
        return(
            <div>
                 <form onSubmit={this.addItem}>
                    <input type='text' placeholder="Enter IMG URL"
                    name="currUrl"
                    value={this.state.currUrl}
                    onChange = {this.inputHandler}
                    />
                    <button type='submit' id="btn">Add</button>
                </form>
                <div className="center">
                <RowItems Items={this.state.imgData} 
                deleteImg = {this.deleteItem}
                />
                </div>
            </div>
        )
    }
}