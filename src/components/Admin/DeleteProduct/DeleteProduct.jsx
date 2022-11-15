import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import { deleteProduct } from '../../../services/routes'
import { Button } from 'react-bootstrap'
import { viewSuccessAlert } from '../../Alerts/Success'
import GeneralError from '../../Alerts/error/GeneralError'

const DeleteProduct = ({prodID}) => {

    const { user } = useContext(UserContext)

    const deleteProd = (prodID) => {
        deleteProduct(user._id, prodID)
            .then(res => (res.data === true) ? viewSuccessAlert('Borrado') : GeneralError())
    }

  return (
            <Button className='btn-danger mx-1' type="submit" onClick={() => deleteProd(prodID)}>
                Borrar Producto
            </Button>
    
  )
}

export default DeleteProduct