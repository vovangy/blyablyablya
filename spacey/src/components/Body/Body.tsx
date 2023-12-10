import React, { FC } from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import search_img from './search.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import './Body.css'
import image from './1.png'



const starships = [
    {"ID": 1,"Title": "Starship Mk1",  "Rocket": "Super Heavy B3",  "Type": "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса.", "Image_url": image},
	{"ID": 2,"Title": "Starship SN1",  "Rocket": "Super Heavy B3",  "Type": "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса.", "Image_url": image},
	{"ID": 3,"Title": "Starship SN2",  "Rocket": "Super Heavy B3",  "Type": "Транспортный корабль", "Description": "Корабль с отсеком для полезной нагрузки больше, чем любой обтекатель, который находится в эксплуатации или разработке, вплоть до очень больших аппаратов.", "Image_url": image},
	{"ID": 4,"Title": "Starship SN3",  "Rocket": "Super Heavy B3",  "Type": "Транспортный корабль", "Description": "Корабль с отсеком для полезной нагрузки больше, чем любой обтекатель, который находится в эксплуатации или разработке, вплоть до очень больших аппаратов.", "Image_url": image},
	{"ID": 5,"Title": "Starship SN4",  "Rocket": "Super Heavy B3",  "Type": "Лунный посадочный модуль", "Description": "Версия пилотируемого корабля, способного перевозить экипаж с низкой околоземной орбиты до лунной орбитальной станции Gateway и между станцией и поверхностью Луны.", "Image_url": image},
	{"ID": 6,"Title": "Starship SN5",  "Rocket": "Super Heavy B4",  "Type": "Топливный танкер", "Description": "Танкер для доставки топлива на орбиту, где размещены топливные депо для дозаправки, необходимые для длительных перелётов.", "Image_url": image},
	{"ID": 7,"Title": "Starship SN6",  "Rocket": "Super Heavy B4",  "Type": "Лунный посадочный модуль", "Description": "Версия пилотируемого корабля, способного перевозить экипаж с низкой околоземной орбиты до лунной орбитальной станции Gateway и между станцией и поверхностью Луны.", "Image_url": image},
	{"ID": 8,"Title": "Starship SN7",  "Rocket": "Super Heavy B4",  "Type": "Топливный танкер", "Description": "Танкер для доставки топлива на орбиту, где размещены топливные депо для дозаправки, необходимые для длительных перелётов.", "Image_url": image},
	{"ID": 9,"Title": "Starship SN8",  "Rocket": "Super Heavy B4",  "Type": "Транспортный корабль", "Description": "Корабль с отсеком для полезной нагрузки больше, чем любой обтекатель, который находится в эксплуатации или разработке, вплоть до очень больших аппаратов.", "Image_url": image},
	{"ID": 10,"Title": "Starship SN9",  "Rocket": "Super Heavy B4",  "Type": "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса.", "Image_url": image},
	{"ID": 11,"Title": "Starship SN10", "Rocket":  "Super Heavy B5", "Type":  "Топливный танкер", "Description": "Танкер для доставки топлива на орбиту, где размещены топливные депо для дозаправки, необходимые для длительных перелётов." , "Image_url": image},
	{"ID": 12,"Title": "Starship SN11", "Rocket":  "Super Heavy B5", "Type":  "Лунный посадочный модуль", "Description": "Версия пилотируемого корабля, способного перевозить экипаж с низкой околоземной орбиты до лунной орбитальной станции Gateway и между станцией и поверхностью Луны.", "Image_url": image},
	{"ID": 13,"Title": "Starship SN15", "Rocket":  "Super Heavy B5", "Type":  "Лунный посадочный модуль", "Description": "Версия пилотируемого корабля, способного перевозить экипаж с низкой околоземной орбиты до лунной орбитальной станции Gateway и между станцией и поверхностью Луны.", "Image_url": image},
	{"ID": 14,"Title": "Starship SN20", "Rocket":  "Super Heavy B4", "Type":  "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса." , "Image_url": image},
	{"ID": 15,"Title": "Starship SN24", "Rocket":  "Super Heavy B7", "Type":  "Космический корабль", "Description": "Полностью многоразовая транспортная система, предназначенная для перевозки экипажа и грузов на околоземную орбиту, Луну и Марс. Для взлета с Земли необходима сверхтяжелая ракета-носитель. Корабль может осуществлять посадку и взлеты с Луны и Марса.", "Image_url": image},
]

const Body: FC = () => {
    const [ships, setShips] = useState<any[]>(starships)
    const [search, setSearch] = useState('')

    if (ships.length==0){
        return (
            <div className="body">
            <div className="block">
                <div className="mytop">
                <Breadcrumbs title="" id=""/>
                <Form className="search" method="GET" role="search" action="/starships">
                    <Form.Group className="" controlId="formBasicEmail">
                        <Form.Control 
                        type="search" 
                        placeholder="Поиск по названию" 
                        className="myinput" 
                        name="search" 
                        autoComplete="off" 
                        value={search} onChange={(e) => {setSearch(e.target.value)
                        console.log(e.target.value)
                        console.log(search)
                        }}/>
                    </Form.Group>
                    <Button variant="light" type="submit" className="btn_submit">
                        <img src={search_img} alt="" className="search_image"/>
                    </Button>
                </Form>
                </div>
                <div className="card_container notFound">
                    Ничего не найдено :(
                </div>
            </div>
            </div>
        )
    }
    return(
        <div className="body">
        <div className="block">
            <div className="mytop">
            <Breadcrumbs title="" id=""/>
            <Form className="search" method="GET" role="search" action="/starships">
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Control 
                    type="search" 
                    placeholder="Поиск по названию" 
                    className="myinput" 
                    name="search" 
                    autoComplete="off" 
                    value={search} onChange={(e) => {setSearch(e.target.value)
                    console.log(e.target.value)
                    console.log(search)
                    }}/>
                </Form.Group>
                <Button variant="light" type="submit" className="btn_submit">
                    <img src={search_img} alt="" className="search_image"/>
                </Button>
            </Form>
            </div>
            <div className="card_container">
                {ships.map((item) => (
                    <Card data={item}/>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Body;