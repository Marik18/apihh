import React from "react";
import { Menu } from "./menu/menu";
import { MENU } from "../../static-data/menu";

export const Header = () => {
    return (
        <div>
            <Menu list={MENU}/>
        </div>
    )
}