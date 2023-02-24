interface ICol {
    x : number,
    y : number,
    r : number,
    g : number,
    b : number,
    context : CanvasRenderingContext2D
}
var col = function(props : ICol) {
    const {x,y,r,g,b, context} = props
    context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    context.fillRect(x, y, 1,1);
}
interface IRGB {
    x: number,
    y:number,
    t:number
}
const R = (props : IRGB): number => {
    const {x,y,t} = props
    return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

const G = (props : IRGB): number =>{
    const {x,y,t} = props
    return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

const B = (props : IRGB) : number =>{
    const {x,y,t} = props
    return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}


// const canv = useRef<HTMLCanvasElement>(null)
//   useEffect(()=>{
//     let t = 0;
//     (function run(){
//         let x,y
//         for(x=0;x<=35;x++) {
//             for(y=0;y<=35;y++) {
//                 const iRGB = {
//                     x : x,
//                     y : y,
//                     t : t
//                 }
//                 const iCol = {
//                     x : x,
//                     y : y,
//                     r : R(iRGB),
//                     g : G(iRGB),
//                     b : B(iRGB),
//                     context : canv.current?.getContext('2d') as CanvasRenderingContext2D
//                 }
//             col(iCol);
//             }
//         }
//         t = t + 0.020;
//         window.requestAnimationFrame(run);
//     })()
//   },[])

export {R, G, B, col}