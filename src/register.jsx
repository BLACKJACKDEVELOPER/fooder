import "./styles/register.css";
import {
    Input,
    Switch,
    Button
} from "@arco-design/web-react"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const Link = useNavigate()


    return (<>
        
        <form className="register">
            <h1>สมัครสมาชิก</h1>
            <div className="inputGP">
                <img src="Icons/User.png" alt="" />
                <Input placeholder="Firstname and Lastname"></Input>
            </div>
            <div className="inputGP">
                <img src="Icons/World.png" alt="" />
                <Input placeholder="Username"></Input>
            </div>
            <div className="inputGP">
                <img src="Icons/Password.png" alt="" />
                <Input placeholder="Password"></Input>
            </div>
            <div className="Policy">
                <Switch></Switch>
                <h3>ยอมรับข้อกับหมดทั้งหมด <span className="PolicyInfo">อ่าน</span></h3>
            </div>
            <div className="btns">
                <Button size="large" className="btn" type="primary" shape="round">ส่ง</Button>
                <Button size="large" className="btn" type="secondary" shape="round">กลับ</Button>
            </div>
        </form>
        
        <div className="AlreadyAccount">
            <h3>ฉันมีบัญชีอยู่แล้ว <span onClick={()=> Link('/login')}>คลิ๊กที่นี้</span></h3>
        </div>

    </>)
}