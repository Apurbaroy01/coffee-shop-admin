import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const EditCoffee = () => {
    const coffeeLoader = useLoaderData()
    const navigate=useNavigate()
    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const supplierName = form.supplierName.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee = { coffeeName, supplierName, category, quantity, price, details, photo };
        console.log(coffee);

        fetch(`https://cofee-store-server-neon.vercel.app/coffee/${coffeeLoader._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Update Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                    navigate('/DashBoard/updatecoffee')
                }
                form.reset()
                
            });


    };
    return (
        <div>
            <h1 className=" text-3xl font-bold text-center text-pink-600">Edit Coffee</h1>
            <div className="display flex justify-center items-center h-screen bg-[#F4F3F0] ">
                <form onSubmit={handleUpdateCoffee}>
                    <fieldset className="fieldset bg-base-200 border-base-400 shadow-2xl rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl  font-bold w-120">Edit Coffee</legend>

                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="">
                                <label className="label">Coffee Name</label>
                                <input type="text" className="input" name="coffeeName" defaultValue={coffeeLoader.coffeeName} />

                                <label className="label">Supplier Name</label>
                                <input type="text" className="input" name="supplierName" defaultValue={coffeeLoader.supplierName} />

                                <label className="label">Category</label>
                                <input type="text" className="input" name="category" defaultValue={coffeeLoader.category} />
                            </div>
                            <div>
                                <label className="label">Available Quantity</label>
                                <input type="text" className="input" name="quantity" defaultValue={coffeeLoader.quantity} />

                                <label className="label">Price</label>
                                <input type="text" className="input" name="price" defaultValue={coffeeLoader.price} />

                                <label className="label">Details</label>
                                <input type="text" className="input" name="details" defaultValue={coffeeLoader.details} />
                            </div>
                        </div>
                        <label className="label">Photo</label>
                        <input type="text" className="input w-full" placeholder="Photo-URL" name="photo" defaultValue={coffeeLoader.photo} />
                        <button className="btn btn-primary mt-5">Update</button>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default EditCoffee;