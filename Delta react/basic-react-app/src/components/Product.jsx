import Price from "../Price";
import "./Product.css";

function Product({title,idx}){
    let oldPrice=["12,495","11,900","1.599","599"];
    let newPrice=["8,999","0,199","899","278"];
    let description=[["8.,000 DPI","Programmable buttons"],
    ["intuitive surface","designed for iPad pro"],
    ["designed for iPad Pro","Initiative surface"],
    ["wireless","optical orientation"],
];

   

    
    return(
        
        <div className="Product" >
            <h4>{title}</h4>
        
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>


        
        </div>
    )
}
export default Product;