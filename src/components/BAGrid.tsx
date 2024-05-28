type PropsTypes =  {
    datasource:any[],
    gridcols:{
        key:string,
        label:string,
        displayFeild?:any,
    }[]
}

export default function BAGrid (props:PropsTypes) {

    const {gridcols, datasource} = props;

    return (
        <>
            <table style={{border:'1px solid black'}} className="table table-striped table-hover m-auto w-75 mt-5 text-center">
                <thead>
                    {gridcols.map((col , ind) => 
                         <th key={ind}>{col.label}</th>
                    )}
                </thead>
                <tbody>
                    {datasource.map((row,rowInd)=>
                        <tr key={rowInd}>
                            {gridcols.map((col,ind)=>
                                <td key={ind}>{col.displayFeild ? col.displayFeild(row) : row[col.key]}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}