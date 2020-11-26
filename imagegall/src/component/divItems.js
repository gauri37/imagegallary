import React from 'react';

function RowItems(props)
{
    const items = props.Items; 
    const listItems = items.map(itm => {
        return(
            <img key={itm.Id} src={itm.imgUrl}></img>
        )
    });

    return (
        <div>
            {listItems}
        </div>    
    )
}

export default RowItems;