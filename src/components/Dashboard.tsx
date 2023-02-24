import { ReactNode, useState, useEffect } from "react"
import { ICoin } from "../api"
import { useNavigate } from "react-router-dom"

interface Props{
    coins : ICoin[] | undefined,
}
type Selected = "currency" | "defi" | "token" | "recent" 
interface IState {
    selected : Selected,
}
export default function Dashboard(props : Props){
    const [state, setState] = useState<IState>({selected : "currency"})
    const navigate = useNavigate()
    const {coins} = props

    const stateHandler = (e : React.MouseEvent) => {
        const el = e.target as HTMLElement
        const value = el.dataset.value as Selected
        setState(prev => ({...prev, selected : value}))
    }
    const navigateHandler = (coinId : string) => {
        navigate(`/${coinId}`)
    }
    
    return (
        <section className="px-2">
            
            <Tab selected={state.selected} selectedHandler={stateHandler}></Tab>
            <Header selected={state.selected}></Header>
            {
                coins === undefined ? <h1>no coins</h1> : <List handler={navigateHandler} coins={coins}/>
            }
            
        </section>
    )
}
interface TabProps {
    selected : Selected,
    selectedHandler : (e : React.MouseEvent)=>void
}
function Tab(props : TabProps){
    const {selected, selectedHandler} = props
    const SELECTED = 'px-2 text-xl text-white font-bold cursor-pointer'
    const NON_SELECTED = 'px-2 text-xl cursor-pointer'
    return(
        <div className="flex">
            <div 
                className={selected==='currency' ? SELECTED : NON_SELECTED}
                data-value='currency'
                onClick={selectedHandler}
            >Currencies</div>
            <div 
                className={selected==='defi' ? SELECTED : NON_SELECTED}
                data-value='defi'
                onClick={selectedHandler}
            >DeFi</div>
            <div 
                className={selected==='token' ? SELECTED : NON_SELECTED}
                data-value='token'
                onClick={selectedHandler}
            >Token</div>
            <div 
                className={selected==='recent' ? SELECTED : NON_SELECTED}
                data-value='recent'
                onClick={selectedHandler}
            >Recently Added</div>
        </div>
    )
}
interface HeaderProps{
    selected : Selected
}
function Header(props : HeaderProps){
    const {selected} = props
    const [head, setHead] = useState("")
    useEffect(()=>{
        if(selected === 'currency'){
            setHead('Top 100 Crypto currencies')
        }else if(selected ==='defi'){
            setHead('Top 100 DeFi')
        }else if(selected ==='token'){
            setHead('Top 100 Token')
        }else if(selected ==='recent'){
            setHead('Top 100 Recently added')
        }

    },[])
    return(
        <header>
            <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl">{head}</span>
        </header>
    )
}

interface IList {
    children? : ReactNode,
    coins : ICoin[],
    handler : (coinId :string)=>void
}
function List(props: IList){
    const {coins, handler} = props
    return(
        <ul>
            {
                coins.map((coin, index) =>
                    <Item key={coin.id} handler={handler} coin={coin}></Item>
                )
            }
        </ul>
    )
}

interface IItem{
    coin : ICoin,
    handler : (coinId : string)=>void
}
function Item(props : IItem){
    const {handler} = props
    const {name, id, symbol} = props.coin
    
    return(
        <li
            className="hover:cursor-pointer w-40 grid grid-cols-2"
            onClick={()=>handler(id)}
        >
            
            <span className="text-lg text-sky-600">{name}</span>
            <span>{symbol}</span>
        </li>
    )
}