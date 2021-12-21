import React from "react";
import { Select, Tooltip } from 'antd';
import "antd/dist/antd.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const { Option } = Select;

export const SelectRegions = ({ onChange }) => {
    let { data } = useTypedSelector(state => state);

    data = data.regions;

    const initialRegions1 = ["Все регионы"];

    const createArrRegions = (data) => {
        let initialRegions2 = [];
        data.forEach(item => initialRegions2.push(item.areaName));
        initialRegions2.sort();
        const regions = [initialRegions1, ...initialRegions2];
        const arrRegions = [];
        regions.forEach(item => arrRegions.push(<Option key={item}>{item}</Option>));
        return arrRegions;
    }

    return (
        <Tooltip placement="top" color="blue" title="Выберите регион поиска">
            <Select size="large" defaultActiveFirstOption="true" defaultValue="Все регионы" maxTagCount="10" onChange={(e) => onChange(e)} style={{ width: 200, marginRight: 15 }}>
                {(!data || data.length === 0) ? (null) : (createArrRegions(data))}
            </Select>
        </Tooltip>
    )
}