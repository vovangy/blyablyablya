import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from '../../components/Card/1.png'
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import './Details.css'

const starships = [
    {"ID": "1","Title": "Starship Mk1",  "Rocket": "Super Heavy B3",  "Type": "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса.", "Image_url": image},
	{"ID": "2","Title": "Starship SN1",  "Rocket": "Super Heavy B3",  "Type": "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса.", "Image_url": image},
	{"ID": "3","Title": "Starship SN2",  "Rocket": "Super Heavy B3",  "Type": "Транспортный корабль", "Description": "Корабль с отсеком для полезной нагрузки больше, чем любой обтекатель, который находится в эксплуатации или разработке, вплоть до очень больших аппаратов.", "Image_url": image},
	{"ID": "4","Title": "Starship SN3",  "Rocket": "Super Heavy B3",  "Type": "Транспортный корабль", "Description": "Корабль с отсеком для полезной нагрузки больше, чем любой обтекатель, который находится в эксплуатации или разработке, вплоть до очень больших аппаратов.", "Image_url": image},
	{"ID": "5","Title": "Starship SN4",  "Rocket": "Super Heavy B3",  "Type": "Лунный посадочный модуль", "Description": "Версия пилотируемого корабля, способного перевозить экипаж с низкой околоземной орбиты до лунной орбитальной станции Gateway и между станцией и поверхностью Луны.", "Image_url": image},
	{"ID": "6","Title": "Starship SN5",  "Rocket": "Super Heavy B4",  "Type": "Топливный танкер", "Description": "Танкер для доставки топлива на орбиту, где размещены топливные депо для дозаправки, необходимые для длительных перелётов.", "Image_url": image},
	{"ID": "7","Title": "Starship SN6",  "Rocket": "Super Heavy B4",  "Type": "Лунный посадочный модуль", "Description": "Версия пилотируемого корабля, способного перевозить экипаж с низкой околоземной орбиты до лунной орбитальной станции Gateway и между станцией и поверхностью Луны.", "Image_url": image},
	{"ID": "8","Title": "Starship SN7",  "Rocket": "Super Heavy B4",  "Type": "Топливный танкер", "Description": "Танкер для доставки топлива на орбиту, где размещены топливные депо для дозаправки, необходимые для длительных перелётов.", "Image_url": image},
	{"ID": "9","Title": "Starship SN8",  "Rocket": "Super Heavy B4",  "Type": "Транспортный корабль", "Description": "Корабль с отсеком для полезной нагрузки больше, чем любой обтекатель, который находится в эксплуатации или разработке, вплоть до очень больших аппаратов.", "Image_url": image},
	{"ID": "10","Title": "Starship SN9",  "Rocket": "Super Heavy B4",  "Type": "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса.", "Image_url": image},
	{"ID": "11","Title": "Starship SN10", "Rocket":  "Super Heavy B5", "Type":  "Топливный танкер", "Description": "Танкер для доставки топлива на орбиту, где размещены топливные депо для дозаправки, необходимые для длительных перелётов." , "Image_url": image},
	{"ID": "12","Title": "Starship SN11", "Rocket":  "Super Heavy B5", "Type":  "Лунный посадочный модуль", "Description": "Версия пилотируемого корабля, способного перевозить экипаж с низкой околоземной орбиты до лунной орбитальной станции Gateway и между станцией и поверхностью Луны.", "Image_url": image},
	{"ID": "13","Title": "Starship SN15", "Rocket":  "Super Heavy B5", "Type":  "Лунный посадочный модуль", "Description": "Версия пилотируемого корабля, способного перевозить экипаж с низкой околоземной орбиты до лунной орбитальной станции Gateway и между станцией и поверхностью Луны.", "Image_url": image},
	{"ID": "14","Title": "Starship SN20", "Rocket":  "Super Heavy B4", "Type":  "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса." , "Image_url": image},
	{"ID": "15","Title": "Starship SN24", "Rocket":  "Super Heavy B7", "Type":  "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса.", "Image_url": image},
]


const DetailsPage: FC = () => {

    const {id} = useParams()
    const [ship, setShip] = useState({})

    useEffect(()=>{
        for (var i in starships){
            if (id == starships[i].ID){
                setShip(starships[i])
                return
            }
        }
    })

    return(
        <div className="body mydetails">
        <div className="block">
            <Breadcrumb title={ship.Title} id={ship.ID}/>
            <div className="mycontainer">
                <div className="photo"> <img className="image" src={ship.Image_url} alt=""/></div>
                <div className="text">
                    <div className="title">ОПИСАНИЕ ЗВЁЗДНОГО КОРАБЛЯ</div>
                    <div className="overview">
                        <div className="item_owerview"> 
                            <span>ИМЯ</span>
                            <span>{ship.Title}</span>
                        </div>
                        <div className="item_owerview"> 
                            <span>РАКЕТА-НОСИТЕЛЬ</span>
                            <span>{ship.Rocket}</span>
                        </div>
                        <div className="item_owerview"> 
                            <span>ТИП</span>
                            <span>{ship.Type}</span>
                        </div>
                        <div className="item_owerview description"> 
                            <span>{ship.Description}</span>
                        </div>
                    </div>
                    <div className="mybtn">
                        <a href="/starships" className="btn_back">Вернуться к списку</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default DetailsPage