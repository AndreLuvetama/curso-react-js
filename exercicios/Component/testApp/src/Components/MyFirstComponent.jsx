import React, { useState } from "react";
import MyButton from "./MyButton";
import PublicImg from "./PublicImg";
import { ImagIAssets } from "./ImagIAssets";
import { StateUse } from "./StateUse";
import ListData from "./ListData";
import { RenderCondicional } from "./RenderCondicional";
import { ShowProps } from "./ShowProps";
import { CardDetails } from "./CardDetails";
import { Fragment } from "./Fragment";
import { Container } from "./Container";
import { Message } from "./Message";
import { ChangeMessage } from "./ChangeMessage";


const MyFirstComponent = () =>{
    const [message, setMessage] = useState("")
    const cars=[
        {id:1, brand:"Ferrari", color:"Amarela", newCar:true, km:0},
        {id:2, brand:"Kia", color:"Azul", newCar:false, km:62727},  
        {id:3, brand:"Ford", color:"Vermelha", newCar:false, km:10282},
    ]
    const msg='Change mensagem'
    const handleMessage = (msg) =>{
        setMessage(msg)
    }
    return(
        <>
            <h1>Primeiro component</h1>
            <MyButton />
            <PublicImg />
            <ImagIAssets/>
            <StateUse />
            <ListData />
            <RenderCondicional/>
            <ShowProps name='Andre' />
             {/*destructuring*/}
            <CardDetails brand="WV" km={1000} color='azul' />
            {/*reaaproveitando*/}
            <CardDetails brand="Ford" km={0} color='Vermelho' />
            {/*Loop do component*/}
            <CardDetails brand="Fiat" km={4500} color='Branco' />
            {
            cars.map((car) =>(
                <CardDetails brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
            ) )}
            {/*Fragment*/}
            <Fragment propFragment={"teste"} />
              {/*Children*/}
              <Container myValue={"teste"} /> 
              {/*State lift*/}
              <Message msg={message} />
              <ChangeMessage handleMessage={handleMessage} />         
            
        </>

    );
}

export default MyFirstComponent;