
export var TableRow = (props) => {
    return (
        <tr>
            <td>{props.count}</td>
            <td>{props.name}</td>
            <td>{props.dept}</td>
        </tr>
    );
}
 // Component for the table
 export var Table = (props) => {
     return (
         <table className="table">
             <thead>
                 <tr>
                     <th>count</th>
                     <th>name</th>
                     <th>dept</th>
                 </tr>
             </thead>
             <tbody>
                 {props.children}
             </tbody>
         </table>
     );
 }

