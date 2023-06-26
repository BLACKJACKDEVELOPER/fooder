import '../styles/header.css'
import {
    useNavigate
} from 'react-router-dom'
export default function Header() {
    // Hot Link
    const Link = useNavigate()
    return (<>
        <header>
            <div onClick={()=> Link('/')} className="profile">
                <div className="circle"></div>
                <div className="info">
                    <h3>Piyapon <br /><span>Hrs@gmail.com</span></h3>
                </div>
            </div>
            <div className="menuInteract">
                <img src="/Icons/Upload.png" alt="" />
                <img src="/Icons/Archive.png" alt="" />
                <img onClick={()=> Link('/login')} src="/Icons/Poweroff.png" alt="" />
            </div>
        </header>
    </>)
}