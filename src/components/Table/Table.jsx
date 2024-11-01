import { useEffect, useState } from "react"
import { ListBrothers } from "../../services/crudservices"


let Table = () =>
{
    let info
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(1)
    const getData = async () =>
    {
        info = await ListBrothers()
        console.log(info, "printing info")


        setData(info)
        setLoading(0)
    }

    useEffect(() =>
    {

        getData()
    }, [])

    useEffect(() =>
    {
        console.log(data, 'printing data')

    }, [data])

    return <>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Edad</th>
                    <th>Fecha de nacimiento</th>

                </tr>
            </thead>
            <tbody>


                {
                    data.map((brother, index) =>

                        <tr key={index}>
                            <td>
                                {brother.firstName}
                            </td>
                            <td>
                                {brother.lastName}
                            </td>
                            <td>
                                {brother.phoneNumber}
                            </td>
                            <td>
                                {brother.age}
                            </td>
                            <td>
                                {brother.dob}
                            </td>
                        </tr>
                    )
                }
                <tr>
                    <td>
                        {

                            loading == 1 ? "loading" : loading == 0 ? "" : "error"
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    </>

}

export default Table