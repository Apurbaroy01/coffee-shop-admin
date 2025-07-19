import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleCoffeeSubmit = (event) => {
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

        fetch('https://cofee-store-server-neon.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Delete Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                }
                form.reset()
            })
    }

    return (
        <div className=" display flex justify-center items-center h-screen  bg-[#F4F3F0] ">
            <form onSubmit={handleCoffeeSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-400 shadow-2xl rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-pink-600  font-bold w-120">Add Coffee</legend>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <label className="label">Coffee Name</label>
                            <input type="text" className="input" name="coffeeName" />

                            <label className="label">Supplier Name</label>
                            <input type="text" className="input" name="supplierName" />

                            <label className="label">Category</label>
                            <input type="text" className="input" name="category" />
                        </div>
                        <div>
                            <label className="label">Available Quantity</label>
                            <input type="text" className="input" name="quantity" />

                            <label className="label">Price</label>
                            <input type="text" className="input" name="price" />

                            <label className="label">Details</label>
                            <input type="text" className="input" name="details" />
                        </div>
                    </div>
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" placeholder="Photo-URL" name="photo" />
                    <button className="btn btn-primary mt-4 ">Add Coffee</button>

                </fieldset>
            </form>
        </div>
    );
};

export default AddCoffee;