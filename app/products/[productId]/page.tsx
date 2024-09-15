export default function ProductDetails({params} : {params:{productId : string};}) { 
    // params is an object with a key called productId with type string
    return(
        <>
        <h2>Products details page with id: {params.productId} </h2>
        </>
    )
} 