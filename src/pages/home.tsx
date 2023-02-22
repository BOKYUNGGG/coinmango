import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getCoins} from '../api'
import Dashboard from '../components/Dashboard'
export default function Home(){
    
    return(
        <div>
            <Dashboard coins={MOCKS}></Dashboard>
        </div>
    )

}

const MOCKS = [
    {
        id: "btc-bitcoin",
        is_active: true,
        is_new: false,
        name: "Bitcoin",
        rank: 1,
        symbol: "BTC",
        type: "coin",
    },
]