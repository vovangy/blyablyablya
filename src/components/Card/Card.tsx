import { FC } from "react";

interface Props {
  data: {
    ID: number,
    Title: string,
    Rocket: string,
    Image_url: string,
    Type: string,
  }
}

const Card: FC<Props> = (props) => {


    return(
        <div className="card">
                <a href={"starships/"+props.data.ID} className="image_item">
                    <img src={props.data.Image_url} alt={props.data.Image_url} className="image"/>
                </a>
                <a href="" className="text_item">
                    {props.data.Title}
                </a>
                <div className="discription">
                    <div className="type">{props.data.Type}</div>
                </div>
            </div>
    )
}

export default Card;