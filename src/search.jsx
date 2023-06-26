import './styles/search.css'
import {
    useLocation,
    useNavigate
} from 'react-router-dom'

import {
    Message,
    Input,
    Button
} from '@arco-design/web-react'

import {
    useEffect,
    useState,
    useRef
} from 'react'

// External components
import Products from './components/Products.jsx'

export default function Search(props) {
    const query = useLocation()
    const search = query.search.split('?query=').pop()

    // pre data
    const [data, setData] = useState([])

    // fetch food by search
    useEffect(() => {
        Message.loading({
            id: 'pullingData',
            content: 'Loading Data...'
        })
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
            .then(res => res.json()).then(res => {
                res.meals != null ? setData(res.meals) : setData([]) 
                Message.success({
                    id: 'pullingData',
                    content: 'Successfully',
                    duration: 1000
                })
            })
    }, [])

// referrece to element for searching
const searcher = useRef(null)
// Hot Link
const Link = useNavigate()
// Got text search and goto query data
function Search() {
    Message.loading({
        id: 'pullingData',
        content: 'Loading Data...'
    })
    let s = searcher.current.dom.value
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + s)
        .then(res => res.json()).then(res => {
            res.meals != null ? (setData(res.meals)) : setData([])
            Message.success({
                id: 'pullingData',
                content: 'Successfully',
                duration: 1000
            })
        })
}


    return (<>

<div className="search">
      <div className="searchIcon">
        <img src="/Icons/Search.png" alt="" />
      </div>
      <Input ref={searcher}></Input>
      <Button onClick={()=> Search()} shape="round" type="primary">ค้นหา</Button>
    </div>

        <div className="main">
            <div className="boxSearch">
                <h1>💡 ผลการค้นหา "{search}"</h1>
            </div>
            <Products data={data} amount={52} />
        </div>

    </>)
}