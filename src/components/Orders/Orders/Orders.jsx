import React from 'react'
import { Link } from 'react-router-dom'

const Orders = ({order, id}) => {

  return (
    <div>
      <Link to={`/order/${order._id}`} className="mx-1">{order._id}</Link>
    </div>
  )
}

export default Orders