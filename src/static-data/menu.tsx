import {PageIndex} from "../pages/index/PageIndex";
import {PageContacts} from "../pages/contacts/PageContacts";
import logo from "../assets/img/ibs-logo.svg"

export interface IMenu{
  id: number
  component: any
  label: any
  href: string
  exact?: boolean
}

export const MENU: Array<IMenu> = [
  {
    id: 1,
    label: <img src={logo} alt="Логотип IBS"></img>,
    href: "/",
    exact: true,
    component: PageIndex
  },
  {
    id: 2,
    label: "Контакты",
    href: "/contacts",
    component: PageContacts
  },
]