export default function Tableau1(props) {
    return props.tableau.map((row, i) => {
        return <div key={i} style={{display: "flex"}}>
            <Row row={row}/>
            <br/>
        </div>
    })
};

export const Row = (props) => {
    return props.row.map((elem, i) => {
        return <div key={i} style={{backgroundColor: "#3e434c", border: "1px solid lightGrey", width:"50px", height:"50px"}}>
            {(elem === 999999) ? "∞" : elem}
        </div>
    })
};