import { useTypedSelector } from "../../hooks/useTypedSelector";
import React, { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import s from "./index.module.scss";

export const Schedule = () => {
    const { data } = useTypedSelector(state => state);
    const vacancies: any = data.vacancies;
    const summaries: any = data.summaries;

    const labelStyle = {
        fontSize: "24px",
    }

    const itemStyle = {
        width: "250px",
        height: "30px",
        marginTop: "0"
    }

    const contentStyle = {
        fontSize: "16px",
    }

    const CustomizedAxisTick: FC<any> = (props: any) => {
        const { x, y, payload } = props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    textAnchor="end"
                    transform="rotate(-30)"
                >
                    {payload.value}
                </text>
            </g>
        );
    };

    return (
        <div className={s.wrapper}>
            <h2>Гистограмма распределения зарплатных ожиданий</h2>
            <ResponsiveContainer width="100%" height={600}>
                <div className={s.scroll}>
                    <BarChart
                        width={1500}
                        height={600}
                        data={vacancies}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        {"areaName" ? (
                            <XAxis dataKey="areaName" height={80} label={{ value: 'Название регионов', position: 'insideBottomRight', offset: -10 }} tick={<CustomizedAxisTick />} />
                        ) : (
                            <XAxis dataKey="ordinate" height={80} label={{ value: 'Название городов и компаний', position: 'insideBottomRight', offset: -10 }} />
                        )}

                        <YAxis width={80} label={{ value: 'Уровень з/п', angle: -90, position: 'insideLeft', offset: -10 }} />
                        <Tooltip contentStyle={contentStyle} itemStyle={itemStyle} labelStyle={labelStyle} />
                        <Legend />
                        <Bar dataKey="minAvgSalary" name="Минимальная з/п" fill="#8884d8" />
                        <Bar dataKey="maxAvgSalary" name="Максимальная з/п" fill="#82ca9d" />
                        <Bar dataKey="avgMediana" name="Медианная з/п" fill="#ffc658" />
                    </BarChart>
                </div>
            </ResponsiveContainer>
        </div>
    )
};