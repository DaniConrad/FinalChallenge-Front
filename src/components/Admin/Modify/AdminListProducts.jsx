import React from 'react'
import { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { UserContext } from '../../../context/UserContext'
import { deleteProduct } from '../../../services/routes'


const AdminListProducts = ({product}) => {

    const {user} = useContext(UserContext)

    


    return (
        <option value={product._id}>{product.name}</option>
    )
}

export default AdminListProducts