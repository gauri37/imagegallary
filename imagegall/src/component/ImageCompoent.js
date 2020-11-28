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