import { FC } from "react";
import '../../css.css'


interface Props {
    data: {
        Title: string,
        Image_url: string
    }
  }
  

const Details: FC<Props> =(props) =>{

    const item = props.data
    
    return(
        <div className="body">
        <div className="block">
            <div className="container">
                <div className="photo"> <img className="image" src={item.Image_url} alt=""/></div>
                <div className="text">
                    <div className="title">ОПИСАНИЕ ЗВЁЗДНОГО КОРАБЛЯ</div>
                    <div className="overview">
                        <div className="item_owerview"> 
                            <span>ИМЯ</span>
                            <span>{item.Title}</span>
                        </div>
                        <div className="item_owerview"> 
                            <span>РАКЕТА-НОСИТЕЛЬ</span>
                            <span>ракета носитель</span>
                        </div>
                        <div className="item_owerview"> 
                            <span>ТИП</span>
                            <span>тип</span>
                        </div>
                        <div className="item_owerview description"> 
                            <span>описание ляляля Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis, sapiente, fuga exercitationem recusandae velit iure eligendi atque architecto nobis ex commodi accusantium soluta aperiam earum quos quia harum reprehenderit!</span>
                        </div>
                    </div>
                    <div className="btn">
                        <a href="/starships" className="btn_back">Вернуться к списку</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default Details