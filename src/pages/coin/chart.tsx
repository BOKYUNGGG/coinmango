import { useLocation } from "react-router-dom"
import { useQuery } from "react-query"
import { Helmet } from "react-helmet"
import { getHistory } from "../../api"
import Spinner from "../../components/Spinner"
import ReactApexChart from "react-apexcharts"

interface IHistory {
    time_open : string,
    time_close : string,
    open : number,
    high : number,
    low : number,
    close : number,
    volume : number,
    market_cap :number
}
export default function Chart(){
    const {state} = useLocation()
    const { isLoading, data} = useQuery<IHistory[]>(["ohlcv", state?.id], ()=> getHistory(state?.id))
    console.log(state)
    return(
        <div>
            <Helmet>
                <title>
                    {
                        isLoading ? "loading..." : state.coinId
                    }
                </title>
            </Helmet>
            <h3>Chart</h3>
            {
                isLoading ? <Spinner /> :
                <ReactApexChart
                    type='line'
                    series={[
                        {
                            name : "Price",
                            data : data?.map(price => price.close) as number[]
                        }
                       
                    ]}
                    options={{
                        theme : {
                            mode : "dark"
                        },
                        chart : {
                            background : "transparent",
                            toolbar : {
                                show : false
                            }
                        },
                        grid : {
                            show : false
                        },
                        stroke : {
                            curve : "smooth",
                            width : 4
                        },
                        yaxis : {
                            labels : {
                                show : false
                            }
                        },
                        xaxis : {
                            labels : {
                                show : false
                            },
                            type : "datetime",
                            categories : data?.map(price => price.time_close)
                        },
                        fill : {
                            type : "gradient",
                            gradient : {
                                gradientToColors : ["#9AD576"],
                                stops : [0, 100]
                            }
                        },
                        colors : ['#F39530'],
                        tooltip : {
                            y : {
                                formatter : (value : any)=>`${value.toFixed(1)}`
                            }
                        }
                    }}
                />
            }
        </div>
    )
}