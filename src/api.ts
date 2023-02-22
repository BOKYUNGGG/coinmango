const COINS_END_POINT = 'https://api.coinpaprika.com/v1'
const DETAIL_END_POINT = "https://ohlcv-api.nomadcoders.workers.dev"
const DETAIL_EXAMPLE = "https://ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin"
const TICKER_END_POINT = 'https://coinicons-api.vercel.app/'
const TICKER_EXAMPLE = 'https://coinicons-api.vercel.app/api/icon/btc'


export interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,

}
const getCoin = async (coinId : string) => {
    try{
        const response = await fetch(`${DETAIL_END_POINT}?coinId=${coinId}`)
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
        const response = await fetch(`${COINS_END_POINT}/coins`)
        if(!response.ok) {
            throw Error("Fetch coins Error : Response is not ok")
        }

        const json = response.json()
        return json
    }catch(error){
        console.error("Fetch Coins Error : ",error)
    }
}
const getTicker = async () => {
    const response = await fetch('https://coinicons-api.vercel.app/api/icon/btc')
    return response
}


export {getCoin, getCoins, getTicker}