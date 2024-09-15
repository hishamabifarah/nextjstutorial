import { notFound } from "next/navigation";

export default function ReviewDetails({params} : {params:{productId : string ; reviewId: string};}) { 

    if(parseInt(params.reviewId) > 1000 ){
        notFound();
    }
    // params is an object with a key called productId with type string
    return(
        <>
        <h2>Products details page with id: {params.productId} has review {params.reviewId} </h2>
        </>
    )
} 