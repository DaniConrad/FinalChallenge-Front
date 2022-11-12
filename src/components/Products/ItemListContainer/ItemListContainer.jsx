import React, {useState, useEffect} from "react";
import {Container, Spinner} from 'react-bootstrap'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getProducts } from "../../../services/routes";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()
    
    useEffect(() => { 
        setLoading(true)
        getProducts()
            .then(res => setItems(res.data))
            .then(setLoading(false))
    }, [categoryId] );

    return(
    <div className="d-flex flex-column">
        <Container className="d-flex justify-content-center">
            {loading ? <Spinner animation="border" variant="light" /> : ''}
        </Container>
    <ItemList items={items}/>
    </div>
        
    )
}

export default ItemListContainer;