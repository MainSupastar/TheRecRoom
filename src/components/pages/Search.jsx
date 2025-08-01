import './Search.css'

export function Search () {
    return (
        <div>
            <div className="containerSearch">
                <div className="headerSearch">
                    <div className="textSearch">Search For Your School</div>
                </div>
                <div classname="inputsSearch">
                    <div className="inputSearch">
                        <input type="search" placeholder="Enter School Name"/>
                    </div>
                </div>

            </div>
        </div>
    )
}