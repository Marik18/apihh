import React from "react";
import { Select, Tooltip } from "antd";
import "antd/dist/antd.css";

export const SelectTypes: React.FC<{onChange: (e: any) => void}> = ({onChange}) => {
    const { Option } = Select;

    const types: any[] = [];
    const arrTypes: string[] = ["Вакансии", "Резюме"];
    arrTypes.forEach(item => types.push(<Option key={item} value={item}>{item}</Option>))
    return (
        <Tooltip placement="top" color="blue" title="Выберите категорию поиска">
            <Select size="large" defaultActiveFirstOption={true} defaultValue="Вакансии" maxTagCount={10} style={{ width: 200, marginRight: 15  }} onChange={(e) => onChange(e)}>
                {types}
            </Select>
        </Tooltip>
    )
}