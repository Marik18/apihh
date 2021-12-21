import React from "react"
import { Input, Tooltip } from 'antd';

export const InputSearch = ({onChange}) => {
    return (
        <Tooltip placement="top" color="blue" title="Введите название интересующей профессии или профессий через запятую">
            <Input size="large" maxLength="100" placeholder="Введите название профессии" style={{ width: 300, marginRight: 15 }} onChange = {(e) => onChange(e)} />
        </Tooltip>        
    )
}
