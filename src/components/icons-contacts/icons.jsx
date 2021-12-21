import React from 'react';
import { ReactSVG } from 'react-svg';
import s from "./index.module.scss";
import facebook from "../../assets/img/icon-facebook.svg";
import vk from "../../assets/img/icon-vk.svg";
import instagram from "../../assets/img/icon-instagram.svg"


export const Icons = () => {
    return (
        <ul className={s.list}>
            <li>
                <a href="https://www.facebook.com/IBS.ru" aria-label="Фейсбук">
                    <ReactSVG src={facebook} />
                </a>
            </li>
            <li><a href="https://vk.com/ru_ibs" aria-label="ВКонтакте">
                <ReactSVG src={vk} />
            </a>
            </li>
            <li>
                <a href="https://www.instagram.com/ibs.life/?hl=ru" aria-label="Инстаграм">
                    <ReactSVG src={instagram} />
                </a>
            </li>
        </ul>
    )
}