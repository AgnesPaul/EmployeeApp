import logo from '../images/kv logo.png'
import list from '../images/List.png'
import Button from './Button';
import {removeStorage} from "../services/utils"
import { useNavigate } from 'react-router-dom';


const SideNavigation = () => {

    const navigate = useNavigate()

    const onLogout = () => {
        removeStorage("AuthToken");
        navigate('/');
    }

    return(
        <>
        
        <aside>
        <img className="logo" src={logo}/>
            <div class="blue_tile"> 
                <div  class="list_image">
                    <img id="image" src={list}/>
                </div>
                <a href="">Employee List</a>
            </div>

        </aside>
        <section className='sec'>
        <Button className="logout" type="Submit" label="LogOut" value="click" handleClick={()=>onLogout()}/>

        </section>
        
        </>
       

    )
}

export default  SideNavigation;