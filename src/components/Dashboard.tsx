import { ReactNode } from "react"
import { ICoin } from "../api"

interface IDashboard{
    coins : ICoin[]
}
export default function Dashboard(props : IDashboard){
    const {coins} = props

    return (
        <section>
            <Header></Header>
            <List coins={coins}>

            </List>
        </section>
    )
}

function Header(){
    return(
        <header>
            Header
        </header>
    )
}

interface IList {
    children : ReactNode,
    coins : ICoin[]
}
function List(props: IList){
    const {coins} = props
    return(
        <ul>
            {
                coins.map(coin =>
                    <Item key={coin.id} coin={coin}></Item>
                )
            }
        </ul>
    )
}

interface IItem{
    coin : ICoin
}
function Item(props : IItem){
    const {name, id, symbol} = props.coin
    return(
        <li>
            <span>{symbol}</span>
            <span>{name}</span>
        </li>
    )
}