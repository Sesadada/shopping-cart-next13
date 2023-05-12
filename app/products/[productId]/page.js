import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductPage = ({params:{productId}}) => {
  return (
		<div className='bg-pink-400'>
			<p>{productId}</p>
		</div>)
}

export default ProductPage