import { FC } from "react";

interface Props {
  Image_url: string,
  ID: number,
  Type: string,
  Title: string
}

const Card: FC<Props> = (props) => {


    return(
        <div className="card">
                <a href={"/blyablyablya/starships/"+props.ID} className="image_item">
                    <img src={props.Image_url} alt={props.Image_url} className="image"/>
                </a>
                <a href="" className="text_item">
                    {props.Title}
                </a>
                <div className="discription">
                    <div className="type">{props.Type}</div>
                </div>
            </div>
    )
}

export default Card;