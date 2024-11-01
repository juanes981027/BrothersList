import axios from "axios"
import brothersJson from "../../public/brothers.json"

const baseUrl = 'https://crudcrud.com/api/'
const token = 'e5e27bdc73db4aa8bbee0a3fcaa1d141/posts'


export const ListBrothers = async () =>
{

    let data = brothersJson

    return data

}

export const ListBrotherById = (id) =>
{

    let data = axios.get(`${baseUrl} ${token}`, id)
    return data

}


export const AddBrother = (firstName, lastName, phoneNumber, address, dob) =>
{

    let body = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber, phoneNumber,
        address, address,
        dob: dob,
    }

    axios.post(`${baseUrl} ${token}`, body)

}