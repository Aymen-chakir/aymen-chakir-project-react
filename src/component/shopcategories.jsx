import { FaMagnifyingGlass } from "react-icons/fa6";

function Categories(params) {
    return(
        <div className="w-full h-[180vh] flex items-center justify-around bg-blue-600">
        <div className="w-[20%] h-[80%] flex flex-col justify-between items-center">
           <div className="w-full h-[80%] bg-amber-500">
             <div>
                <h1>Categories</h1>
                <span>Bester Seller (8 items)</span>
                <span>Featured (8 items)</span>
                <span>Men (8 items)</span>
                <span>Women (8 items)</span>
            </div>
            <div>
                <h1>COLOR</h1>
                <div className="flex">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
                <div className="flex">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
                <div className="flex">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
            </div>
            <div>
                <h1>price</h1>
                <div className="flex">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
                <div className="flex">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
                <div className="flex">
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
            </div>
            <div>
                <h1>size</h1>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
            <div>
                <input type="text" className="w-[200px] h-[50px] " placeholder="Search..." />
            </div>
           </div>
        </div>
        <div className="w-[70%] h-[80%] bg-amber-400"></div>
    </div>
    )
}
export default  Categories