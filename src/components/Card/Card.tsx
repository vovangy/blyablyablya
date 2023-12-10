import React, { FC, useState } from "react";
import { useEffect } from "react";
import image  from './1.png'

interface Props {
  data: any[]
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