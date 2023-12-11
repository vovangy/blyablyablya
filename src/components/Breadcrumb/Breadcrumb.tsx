import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Breadcrumb.css'
import { Link } from 'react-router-dom';
import home from './home.png'

interface Props{
  title: string
  id: string
}

const Breadcrumbs: FC<Props> = (props) => {

  if (props.title!="" && props.id != ""){
    return(
      <div className='mybreadcrumbs'>
        <a href="/blyablyablya//starships" className='myitem'>
          <img src={home} alt="" className='itemhome'/>
        </a>
        <span className='myitem'>/</span>
        <Link to="/blyablyablya/starships" className='myitem'>Корабли</Link>
        <span className='myitem'>/</span>
        <Link to={"/blyablyablya/starships/"+props.id} className='myitem lastItem'>{props.title}</Link>
    </div>
    )
  }

  return (
    <div className='mybreadcrumbs'>
        <a href="/blyablyablya/starships" className='myitem'>
          <img src={home} alt="" className='itemhome'/>
        </a>
        <span className='myitem'>/</span>
        <Link to="/blyablyablya/starships" className='myitem lastItem'>Корабли</Link>
        
    </div>
  );
}

export default Breadcrumbs;

