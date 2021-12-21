import React from "react";
import { Header } from "../components/header/header";
import s from "./index.module.scss";
import { Switch, Route } from "react-router";
import { MENU } from "../static-data/menu";
import {Footer} from "../components/footer/footer"

export const LayoutMain = () => {
    return (
        <>
            <header className={s.header}>
                <Header />
            </header>
            <main>
                <div className={s.catalog}>
                    <Switch>
                        {MENU.map((item) => (
                            <Route component={item.component} exact={item.exact} key={item.href} path={item.href} />
                        ))}
                    </Switch>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}