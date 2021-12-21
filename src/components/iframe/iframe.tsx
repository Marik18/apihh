import React from 'react';
import s from "./index.module.scss";

const mapURL = "https://yandex.ru/map-widget/v1/-/CCUeYUeodA";

export const Map = () => {
    return (
        <div className = {s.wrapper} >
            <iframe title="map" src={mapURL}></iframe>
        </div>
    )
}