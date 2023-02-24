import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getCoins} from '../api'
import type { ICoin } from '../api'
import Dashboard from '../components/Dashboard'
import Spinner from '../components/Spinner'
import {sample} from '../assets/mock'

export default function Home(){
    const {isLoading, data, error} = useQuery<ICoin[]>('coins', getCoins)
    if (isLoading) return <Spinner /> 
    
    return(
        <div>
            <Dashboard coins={data}></Dashboard>
        </div>
    )

}