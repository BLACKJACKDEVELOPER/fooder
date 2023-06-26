import {
  useRef,
  useEffect,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom'

import './App.css';
import {
  Button,
  Input,
  Carousel,
  Pagination,
  Cascader,
  Message
} from "@arco-design/web-react";
import Products from "./components/Products.jsx"
function App() {
  const Link = useNavigate()
  const options = [
    {
      value: 'กาแฟ',
      label: 'กาแฟ',
      children: [
        {
          value: 'ร้อน',
          label: 'ร้อน',
          children: [
            {
              value: 'ขนาดใหญ่',
              label: 'ขนาดใหญ่',
            },
            {
              value: 'ขนาดกลาง',
              label: 'ขนาดกลาง',
            },
            {
              value: 'ขนาดเล็ก',
              label: 'ขนาดเล็ก',
            }
          ],
        }, {
          value: 'เย็น',
          label: 'เย็น',
          children: [
            {
              value: 'ขนาดใหญ่',
              label: 'ขนาดใหญ่',
            },
            {
              value: 'ขนาดกลาง',
              label: 'ขนาดกลาง',
            },
            {
              value: 'ขนาดเล็ก',
              label: 'ขนาดเล็ก',
            }
          ]
        }
      ],
    },
    {
      value: 'ก๋วยเตี๋ยว',
      label: 'ก๋วยเตี๋ยว',
      children: [
        {
          value: 'เส้นเล็ก',
          label: 'เส้นเล็ก',
          children: [
            {
              value: 'น้ำตก',
              label: 'น้ำตก',
            },
            {
              value: 'น้ำใส',
              label: 'น้ำใส',
            }, {
              value: 'ต้มยำ',
              label: 'ต้มยำ'
            }
          ],
        }, {
          value: 'เส้นใหญ่',
          label: 'เส้นใหญ่',
          children: [
            {
              value: 'น้ำตก',
              label: 'น้ำตก'
            },
            {
              value: 'น้ำใส',
              label: 'น้ำใส'
            },
            {
              value: 'ต้มยำ',
              label: 'ต้มยำ'
            }
          ]
        },
        {
          value: 'เส้นหมี่',
          label: 'เส้นหมี่',
          children: [
            {
              value: 'น้ำตก',
              label: 'น้ำตก'
            },
            {
              value: 'น้ำใส',
              label: 'น้ำใส'
            },
            {
              value: 'ต้มยำ',
              label: 'ต้มยำ'
            }
          ]
        },
        {
          value: 'หมี่หยก',
          label: 'หมี่หยก',
          children: [
            {
              value: 'น้ำตก',
              label: 'น้ำตก'
            },
            {
              value: 'น้ำใส',
              label: 'น้ำใส'
            },
            {
              value: 'ต้มยำ',
              label: 'ต้มยำ'
            }
          ]
        },
        {
          value: 'มาม่า',
          label: 'มาม่า',
          children: [
            {
              value: 'น้ำตก',
              label: 'น้ำตก'
            },
            {
              value: 'น้ำใส',
              label: 'น้ำใส'
            },
            {
              value: 'ต้มยำ',
              label: 'ต้มยำ'
            }
          ]
        },
        {
          value: 'วุ้นเส้น',
          label: 'วุ้นเส้น',
          children: [
            {
              value: 'น้ำตก',
              label: 'น้ำตก'
            },
            {
              value: 'น้ำใส',
              label: 'น้ำใส'
            },
            {
              value: 'ต้มยำ',
              label: 'ต้มยำ'
            }
          ]
        }
      ],
    },
  ];
  const Slides = [
    '/slides/1.jpg',
    '/slides/2.jpg',
    '/slides/3.jpg',
    '/slides/4.jpg',
    '/slides/5.jpg',
    '/slides/6.jpg'
  ]

  // referrece to element for searching
  const search = useRef(null)
  // Got text search and goto query data
  function Search() {
    search.current.dom.value ? Link('/search?query='+search.current.dom.value) : Message.error('Please typing any text for search...')
  }

  // pre data
  const [data,setData] = useState([])
  // pulling data
  useEffect(()=> {
    Message.loading({
      id:'loading',
      content:'requesting data...'
    })
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=p')
    .then(res=> res.json()).then(res=> {
      setData(res.meals)
      Message.success({
        id:'loading',
        content:'Successfully'
      })
    })
  },[])

  return (<>

    <div>
      <Carousel
        style={{ width: "100%", height: 550 }}
        autoPlay={true}
        moveSpeed={200}
        className="slides"
      >
        {Slides.map((img, index) =>
          <div key={index}>
            <img src={img} alt=""
              className="slideImg"
              style={{ width: "100%" }} />
          </div>
        )}
      </Carousel>
    </div>

    <div className="search">
      <div className="searchIcon">
        <img src="/Icons/Search.png" alt="" />
      </div>
      <Input ref={search}></Input>
      <Button onClick={()=> {Search();window.scrollTo(0, document.body.scrollHeight * -1)}} shape="round" type="primary">ค้นหา</Button>
    </div>

    <div className="promotion">
      <div className="promotionTitle">
        <h1> 🤑 โปรโมชั่นสูบเงินออกต้นเดือน</h1>
        <div className="optionals">
          <Cascader
            addBefore='ประเภท'
            placeholder='ไม่มี'
            expandTrigger='hover'
            style={{ width: 300 }}
            options={options}
            size="large"
            allowClear
          />
          <Pagination size="large" total={200} simple />
        </div>
      </div>
      <Products amount={52} data={data} />
    </div>
  </>);
}

export default App;
