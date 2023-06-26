import '../styles/products.css'
import { useNavigate } from 'react-router-dom'

import {
    Skeleton,
    Message
} from '@arco-design/web-react'

import {
    useEffect
} from 'react'

export default function Products({ amount , data }) {


// Hot link
const Link = useNavigate()
    return (<>
    
        <div className="productsBox">
            {(data != false) ? data.map((product,index)=>
                <div key={index} className="product">
                    <div className="primaryInfo">
                        <div className="imageBox">
                            <img onClick={()=> {Link('/productinfo?id='+product.idMeal);window.scrollTo(0, document.body.scrollHeight * -1);}} className="imageProduct" src={product.strMealThumb} alt="" />
                            <h2>{product.strMeal}</h2>
                        </div>
                        <div className="price">
                            <h2>{product.idMeal} B.-</h2>
                        </div>
                    </div>
                    <div className="secondaryInfo">
                        <div className="ownerProduct">
                            <div className="circleProduct"></div>
                            <h4>{product.strArea}</h4>
                        </div>
                        <div className="mediaInfo">
                            <div className="heart">
                                <p>1,999</p>
                                <img src="/Icons/Heart.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (new Array(amount).fill(0)).map((sk,index)=> <Skeleton key={index} size="large" width={100} className="loading" animation></Skeleton>)}
            
        </div>

    </>)
}