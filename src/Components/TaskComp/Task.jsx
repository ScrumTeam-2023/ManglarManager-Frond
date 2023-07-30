export const Task = ({desc,status,date,idUser,surname,departament}) => {
    return(
        <>
            <td >{desc}</td>
            <td>{status}</td>
            <td>{date}</td>
            <td>{idUser}</td>
            <td>{surname}</td>
            <td>{departament}</td>
            
        </>
    )


}
