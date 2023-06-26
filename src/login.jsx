import "./styles/login.css";
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
            <h1>เข้าสู่ระบบ</h1>
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
                <h3>จดจำฉันเสมอ </h3>
            </div>
            <div className="btns">
                <Button onClick={()=> Link('/')} size="large" className="btn" type="primary" shape="round">ส่ง</Button>
            </div>
        </form>
        
        <div className="crossplatform">
            <img src="Icons/facebook.png" alt="" />
            <img src="Icons/google.png" alt="" />
        </div>

        <div className="AlreadyAccount">
            <h3>ฉันยังไม่มีบัญชี <span onClick={()=> Link('/register')}>คลิ๊กที่นี้</span></h3>
        </div>

    </>)
}