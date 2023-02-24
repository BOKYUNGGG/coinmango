const PAPRIKA_END_POINT = 'https://api.coinpaprika.com/v1'
const ICON_END_POINT = 'https://coinicons-api.vercel.app/api/icon'
const NICO_END_POINT = 'https://ohlcv-api.nomadcoders.workers.dev'
export interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,

}
const getCoin = async (coinId : string | undefined) => {
    try{
        if(!coinId){
            throw new Error("Get Coin param is undefined")
        }
        const response = await fetch(`${PAPRIKA_END_POINT}/coins/${coinId}`)
        if(!response.ok) {
            throw Error("Fetch coin Error : Response is not ok")
        }

        const json = response.json()
        return json
    }catch(error){
        console.error("Fetch Coin Error : ",error)
    }
}
const getCoins = async () => {
    try{
        const response = await fetch(`${PAPRIKA_END_POINT}/coins`)
        if(!response.ok) {
            throw Error("Fetch coins Error : Response is not ok")
        }
        
        const coins = await response.json()
        
        return coins.slice(0,100)
    }catch(error){
        console.error("Fetch Coins Error : ",error)
    }
}
const getTicker = async (coinId : string | undefined) => {
    try{
        if(!coinId){
            throw new Error("Get Ticker param is undefined")
        }
        const response = await fetch(`${PAPRIKA_END_POINT}/tickers/${coinId}`)
        if(!response.ok){
            throw new Error("Get Ticker Bad Response")
        }
        const ticker = await response.json()
        return ticker
    }
    catch(err : any){
        console.log(err)
    }
}
const getHistory = async (coinId: string) => {
    try{
        if(!coinId){
            throw new Error("Get History param is undefined")
        }
        const response = await fetch(`${NICO_END_POINT}?coinId=${coinId}`)
        
        if(!response.ok){
            throw new Error("Bad Response")
        }
        const history = await response.json()
        return history
    }
    catch(err){
        console.log(err)
    }   
}


// ?? 오류 수정중
const getIcon = async (coinId : string) => {
    try{
        const response = await fetch(`${ICON_END_POINT}/${coinId}`)
        return response
    }catch(error){
        console.error('Get Icon by coin Id Error :', error)
    }
    
}


export {getCoin, getCoins, getTicker, getHistory}