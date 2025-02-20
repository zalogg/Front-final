import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admservices = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const FetchData = async () => {

        const resp = await fetch(process.env.GET_SERVICES);
        const data1 = await resp.json();
        if (resp.ok) {
            setData(data1);   
        }else{
            alert(data1);
        }
    };
    const NewService = () => {
        navigate('/Newservice');
    }
    useEffect(() => {
        FetchData();
    }, []);

    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <div class="row">
                            <div class="col-lg-12">
                                <h2 class="checkout__title">List of Services</h2>
                                <br></br>
                                <div class="row">
                                    <table id="tbl_productos" class="table table-striped table-bordered">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Image</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.filter(varid => varid).map(filname => (
                                                <tr key={filname._id}>
                                                    <th scope="row">{filname.name}</th>
                                                    <td>${filname.price}</td>
                                                    <td>{filname.description}</td>
                                                    <td>
                                                        <img style={{ width: 'auto', height: 150 }} src={'${process.env.GET_IMAGES}/' + filname.name} alt={filname.name} />
                                                    </td>
                                                    <td>
                                                        <a href={"/Admeditservice/" + filname.idservices} class="btn btn-primary">Edit</a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-lg-6">
                                <button class="site-btn" id="btn_buscar" onClick={() => NewService()}>NEW SERVICE</button>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </section>
        </div>
    )
}

export default Admservices
