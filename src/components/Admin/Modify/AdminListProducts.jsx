import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../../../context/UserContext'
import { deleteProduct } from '../../../services/routes'


const AdminListProducts = ({product}) => {

    const {user} = useContext(UserContext)

    const deleteProd = (prodID) => {
        deleteProduct(user._id, prodID)
            .then(res => console.log(res))
    }

  return (
    <div className='d-flex justify-content-center'>
      <h5 className='mx-1'>{product.name}</h5>
      <h5 className='mx-1'>{product._id}</h5>  
      <Button onClick={() => deleteProd(product._id)}></Button>
    </div>
    
  )
}

export default AdminListProducts