import s from "./index.module.scss";
import React from "react";
import { Button, Form } from 'antd';
import 'antd/dist/antd.css';
import { InputSearch } from "../search/search";
import { SelectRegions } from "../selectRegions/select";
import { SelectTypes } from "../selectTypes/selectTypes";
import { useActions } from "../../hooks/useActions";

export const UserForm = () => {

    enum requestType {
        vacancies = "Вакансии",
        summary = "Резюме",
    }

    let sendingData = {
        type: requestType.vacancies,
        keyWord: [""],
        areaName: "Все регионы",
    }

    const { data__getVacancies } = useActions();
    const { data__getSummaries } = useActions();

    const onChangeInput = (e: any): void => {
        const value: string = e.target.value;
        if (value.indexOf(",") !== -1) {
            const arrKeyWords = value.split(",");
            sendingData.keyWord = [...arrKeyWords];
        } else if (value.indexOf(" ") !== -1) {
            const arrKeyWords = value.split(" ");
            sendingData.keyWord = [...arrKeyWords];
            console.log(arrKeyWords, 2);
        } else {
            sendingData.keyWord = [value];
        }
    }

    const onChangeSelectRegions = (e: any): void => {
        sendingData.areaName = e;
    }

    const onChangeSelectType = (e: any): void => {
        sendingData.type = e;
    }

    const validateMessages = {
        required: 'Укажите интересующую Вас профессию!'
    }

    const onFinish = (errorInfo: any) => {
        if (sendingData.keyWord[0].length > 0) {
            if (sendingData.type === requestType.vacancies) {
                data__getVacancies(sendingData);
                //setDataForm(sendingData);
            } else {
                data__getSummaries(sendingData);
            }
        }
    };

    return (
        <Form className={s.form} layout={"inline"} validateMessages={validateMessages} onFinish={onFinish} >
            <Form.Item name="type search">
                <SelectTypes onChange={onChangeSelectType} />
            </Form.Item>
            <Form.Item name="keywords" rules={[{ required: true }]}>
                <InputSearch onChange={onChangeInput} />
            </Form.Item>
            <Form.Item name="select regions">
                <SelectRegions onChange={onChangeSelectRegions} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="large" >Сформировать отчет</Button>
            </Form.Item>
        </Form>
    )
}