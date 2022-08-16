import React, { FC, useEffect } from 'react';
import { TodoServices } from '../../services';

const List: FC = () => {
    useEffect(() =>{
        TodoServices.getAll().then((data)=>console.log(data));
    },[]);

    return (<div>List</div>);
}

export default List;
