import React from 'react';

function RowItems(props)
{
    const items = props.Items; 
    const listItems = items.map(itm => {
        return(
            <span className="imgDiv">
                <img key={itm.Id} src={itm.imgUrl} alt={itm.Id}></img>
                <span className="closeBtn" onClick={(e)=>props.deleteImg(itm.Id)}>X</span>
            </span>
        )
    });

    return (
        <div>
            {listItems}
        </div>    
    )
}

export default RowItems;