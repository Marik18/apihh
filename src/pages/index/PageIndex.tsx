import React from "react";
import s from "./index.module.scss";
import { UserForm } from "../../components/form/form";
import { Schedule } from "../../components/schedule/Schedule";
import { MenuSave } from "../../components/menuSave/menuSave"
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const PageIndex = () => {
    const { data } = useTypedSelector(state => state);
    //const [dataForm: object, setDataForm] = useState(null);
    return (
        <>
            <div className={s.content}>
                <div className={s.container}>
                    <h2>Создай свою аналитику</h2>
                    <UserForm />
                </div>
            </div>
            <div className={s.report}>
                {(!data.vacancies || data.vacancies.length === 0) ? (
                    <p>Здесь будет ваш отчет</p>
                ) : (
                    <>
                        <Schedule />
                        <div className={s.menu}>
                            <MenuSave />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}