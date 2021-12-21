import React from 'react';
import s from "./index.module.scss";
import logo from "../../assets/img/ibs-logo-white.svg";
import { Icons } from '../icons-contacts/icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Link className={s.link} to={"/"}>
                    <img className={s.image} src={logo} alt="Логотип IBS" />
                </Link>
                <div className={s.address}>
                    <h2>Головной офис</h2>
                    <p>Россия, 127018, Москва, ул. Складочная, д. 3, стр. 1</p>
                    <a href="tel:+7 (495) 967-80-80">Телефон: +7 (495) 967-80-80</a>
                    <a href="tel:+7 (495) 967-80-81">Факс: +7 (495) 967-80-81</a>
                    <a href="mailto:ibs@ibs.ru">E-mail: ibs@ibs.ru</a>
                </div>
                <div className={s.contacts}>
                    <Icons />
                    <p className={s.copyright}>
                        <span>Разработано</span>
                        <Link className={s.link} to={"/contacts"}>Команда №7 IBS</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}