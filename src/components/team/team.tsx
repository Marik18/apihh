import React from 'react';
import s from "./index.module.scss";

export const Team = () => {
    return (
        <div className={s.wrapper}>
            <h3>Команда №7 IBS</h3>
            <div className={s.flex}>
                <div className={s.name}>
                    <h4>Симонов Андрей</h4>
                    <p>Системный аналитик</p>
                </div>
                <div className={s.contacts}>
                    <a href="tel:+7 (495) 967-80-80">+7 (495) 967-80-80</a>
                </div>
            </div>
            <div className={s.flex}>
                <div className={s.name}>
                    <h4>Кустова Мария</h4>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.contacts}>
                    <a href="tel:+7 (495) 967-80-80">+7 (495) 967-80-80</a>
                </div>
            </div>
            <div className={s.flex}>
                <div className={s.name}>
                    <h4>Насибуллина Азалия</h4>
                    <p>Backend Developer</p>
                </div>
                <div className={s.contacts}>
                    <a href="tel:+7 (495) 967-80-80">+7 (495) 967-80-80</a>
                </div>
            </div>
            <div className={s.flex}>
                <div className={s.name}>
                    <h4>Мустафин Игорь</h4>
                    <p>Devops</p>
                </div>
                <div className={s.contacts}>
                    <a href="tel:+7 (495) 967-80-80">+7 (495) 967-80-80</a>
                </div>
            </div>
            <div className={s.flex}>
                <div className={s.name}>
                    <h4>Искандаров Марат</h4>
                    <p>Devops</p>
                </div>
                <div className={s.contacts}>
                    <a href="tel:+7 (495) 967-80-80">+7 (495) 967-80-80</a>
                </div>
            </div>
        </div>
    )
}