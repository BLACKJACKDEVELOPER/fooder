import './styles/productinfo.css'
import {
    Button,
    Pagination,
    Message
} from '@arco-design/web-react';
import Products from './components/Products.jsx';

import {
    useLocation
} from 'react-router-dom'

import {
    useRef,
    useEffect,
    useState
} from 'react'

export default function ProductInfo() {
    // Get query
    const query = useLocation()
    const id = query.search.split('?id=').pop()

    // pre data
    const [data, setData] = useState([])
    // pre data same product
    const [ same , setSame ] = useState([])

    // Pulling data abount this id
    useEffect(() => {
        Message.loading({
            id: 'loading',
            content: 'requesting Data..'
        })
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
            .then(res => res.json()).then(res => {
                setData(res.meals[0])
                Message.success({
                    id: 'loading',
                    content: 'Successfully'
                })
                Message.loading({
                    id:'loadingSame',
                    content:'Requesting Same Product...'
                })
                fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+res.meals[0].strCategory)
                .then(same=> same.json()).then(same=> {
                    setSame(same.meals)
                    Message.success({
                        id:'loadingSame',
                        content:'Success loading advice products'
                    })
                })
            })
    }, [query])
    
    // Change current image
    async function showImg(path) {
        document.getElementById('show').src = path
    }
    

    return (<>

        <div className="mainProduct">
            <div className="productImage">
                <div className="mainImage">
                    <img style={{ borderRadius: '10px', overflow: 'hidden' }} id='show' src={data.strMealThumb} alt="" />
                </div>
                {/* <div className="moreImage">
                    <img onMouseEnter={()=> showImg('/slides/1.jpg')} src="/slides/1.jpg" alt="" />
                    <img onMouseEnter={()=> showImg('/slides/2.jpg')} src="/slides/2.jpg" alt="" />
                    <img onMouseEnter={()=> showImg('/slides/3.jpg')} src="/slides/3.jpg" alt="" />
                    <img onMouseEnter={()=> showImg('/slides/4.jpg')} src="/slides/4.jpg" alt="" />
                    <img onMouseEnter={()=> showImg('/slides/6.jpg')} src="/slides/6.jpg" alt="" />
                </div> */}
            </div>
            <div className="Info">
                <h1>{data.strMeal}</h1>
                <div className="boxHeart">
                    <img className="heart" src="/Icons/heart.png" alt="" />
                    <h2>{(data.idMeal)}</h2>
                </div>
                <div>
                    <h2>ประเทศ {data.strArea}</h2>
                </div>
                <div className="boxBtns">
                    <div className="productPrice"><h1>198 B.-</h1></div>
                    <div className="optionalsBtn">
                        <Button type="primary">
                            เพิ่ม
                        </Button>
                        <Button type="primary" status="success">ซื้อเลย</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="productDescription">
            <div className="titleDes">
                <h1>👁 รายละเอียด</h1>
            </div>
            <div>
                <h4>
                    {data.strInstructions}
                </h4>
                <iframe style={{border:"none",borderRadius:'20px'}} width="100%" height="600"
                    src={data != false ? data.strYoutube.replace('watch?v=','embed/') : ''}>
                </iframe>
            </div>
        </div>

        <div className="sameProduct">
            <div className="sameProductTitle">
                <h1>🎈 สินค้าที่คล้ายกัน</h1>
                <Pagination  size="large" simple total={50} size='small' />
            </div>
            <div className="same">
            <Products data={same} amount={4} className="Same" />
            </div>
        </div>
    </>)
}