import React from 'react';
import s from "./index.module.scss";
import { Team } from '../../components/team/team';
import { Map } from '../../components/iframe/iframe';

export const PageContacts = () => {
    return (
        <div className={s.alignWrapper}>
            <div className={s.container}>
                <h2 className={s.header}>Контакты</h2>
                <div className={s.flex}>
                    <div className={s.wrapper}>
                    <p className={s.text}>Россия, 614010, Пермь, ул. Куйбышева, 95б, 6 этаж</p>
                        <a href="tel:+7 (342) 2-141-700">Телефон / Факс: +7 (342) 2-141-700</a>
                    </div>                    
                    <Team />
                </div>
                <Map />
            </div>
        </div>
    )
}