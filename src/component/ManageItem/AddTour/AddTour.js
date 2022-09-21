import React, { useState } from 'react';

const AddTour = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(Number)
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [duration, setDuration] = useState(Number)
    const [description, setDescription] = useState('')

    const [imgUrl, setImgUrl] = useState(null)
    const [err, setErr] = useState('')
    const [success,setSuccess] = useState('')

    let myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'forkancloudinary',
        uploadPreset: 'storeHotelImg'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info.url);
            setImgUrl(result.info.url)
        }
    }
    )

    const handleOpen = () => {
        myWidget.open()
    }

    const tourData = {
        name: title,
        price: price,
        country: country,
        city: city,
        duration: duration,
        description: description,
        image: imgUrl,
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://node-mongo-acc-assignment-2-server.onrender.com/api/tour`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success')  {
                    setSuccess('Tour Added Successfuly')
                    setErr('')
                } else {
                  setErr(data.message.message)
                  setSuccess('')
                }
            })
    }


    console.log(err);
    console.log(success);


    return (
        <div>
            <div className='border container py-3 mt-3'>
                <h4 className='mb-4'>Create Tour</h4>
               <h5 className={(err && 'text-danger mb-4') || (success && 'text-success mb-4')}>{err || success}</h5>
                <form onSubmit={handleSubmit}>
                    <div className='row'>

                        <div className='col-md-6'>
                            <div class="input-group mb-3">
                                <input type="text" onChange={(e) => setTitle(e.target.value)} required class="form-control py-4" placeholder="Title" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="input-group mb-3">
                                <input type="number" required onChange={(e) => setPrice(e.target.value)} class="form-control py-4" placeholder="Cost" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="input-group mb-3">
                                <input type="text" required onChange={(e) => setCountry(e.target.value)} class="form-control py-4" placeholder="Country" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="input-group mb-3">
                                <input type="text" required onChange={(e) => setCity(e.target.value)} class="form-control py-4" placeholder="City" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class=" mb-3">
                                <div onClick={handleOpen} role='button' className="input-group-text" id="btnGroupAddon2"><i class="fa fa-cloud-upload fs-2 text-primary" aria-hidden="true"></i><span>Upload File</span> </div>
                                {/* <button onClick={handleOpen} class="btn btn-primary" aria-label="Input group example" aria-describedby="btnGroupAddon2">Upload File</button> */}
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div class="input-group mb-3">
                                <select class="form-select" onChange={(e) => setDuration(e.target.value)}>
                                    <option selected>Duration</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                    <option value={4}>Three</option>
                                    <option value={5}>Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div class="input-group mb-3">
                                <textarea rows="5" required onChange={(e) => setDescription(e.target.value)} placeholder='Tour Description' className=" col-md-12"></textarea>
                            </div>
                        </div>

                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        </div >
    );
};

export default AddTour;