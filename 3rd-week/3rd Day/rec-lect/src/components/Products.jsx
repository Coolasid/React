import { useParams } from "react-router-dom"

export const Products = () => {
    const {id} = useParams()
    return <div>
        product id: {id}
    </div>
}