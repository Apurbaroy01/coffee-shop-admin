import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coffee = ({ coffee }) => {
    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Delete!',
                        text: 'Add Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                }

            })
    };
    return (
        <div className="card card-side bg-base-100 shadow-lg border">
            <figure>
                <img
                    src={coffee.photo}
                    alt="Coffee" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Coffee Name: {coffee.coffeeName}</h2>
                <p>Chef: {coffee.supplierName}</p>
                <p>Price: {coffee.price}</p>
                <div className="card-actions   flex flex-col justify-end items-end">

                    <button onClick={() => handleDelete(coffee._id)} className="btn btn-primary w-20">Delete❌</button>
                    <Link to={`/DashBoard/updatecoffee/${coffee._id}`}>
                        <button className="btn btn-primary  w-20">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Coffee;