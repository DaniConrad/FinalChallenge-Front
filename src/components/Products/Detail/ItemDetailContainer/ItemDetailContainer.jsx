import React, {useEffect, useState}from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { getProductDetail } from '../../../../services/routes';
import { ItemDetail } from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({}) ;
    const [loading, setLoading] = useState(true);
    const [reloadData, setReloadData] = useState(false)

    const { itemId } = useParams()
    
    useEffect(() => {
        setLoading(true)
        getProductDetail(itemId)
            .then(res => setProductDetail(res.data))
            .finally(setLoading(false))
        return () => setReloadData(true)
    }, [reloadData])

    console.log(productDetail);
  return (
    <div className="d-flex flex-column align-items-center">
        {loading ? <Spinner animation="border" variant="light" /> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer