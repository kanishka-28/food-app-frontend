import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { SignupContext } from "../../context/signup"
import { updateRes } from "../../services/api"

const Index = () => {
    // const [specificRestaurant, setsepecificRestaurant]= useContext(SignupContext);
    const data= JSON.parse(localStorage.getItem("restaurant"))
    console.log(data);
    const [url1, seturl1] = useState("")
    const [url2, seturl2] = useState("")
    const [url3, seturl3] = useState("")
    const [url4, seturl4] = useState("")
    const [url5, seturl5] = useState("")
    const [url6, seturl6] = useState("")
    const [url7, seturl7] = useState("")
    const handleURL1=(e)=>{
        seturl1(e.target.value);
    }
    const handleURL2=(e)=>{
        seturl2(e.target.value);
    }
    const handleURL3=(e)=>{
        seturl3(e.target.value);
    }
    const handleURL4=(e)=>{
        seturl4(e.target.value);
    }
    const handleURL5=(e)=>{
        seturl5(e.target.value);
    }
    const handleURL6=(e)=>{
        seturl6(e.target.value);
    }
    const handleURL7=(e)=>{
        seturl7(e.target.value);
    }
    const history= useHistory()
    const handleSave=()=>{
        const photos=[url1,url2,url3,url4,url5];
        updateRes({
            id: data._id,
            photos: photos,
            limit: Number(url6),
            restauarntTimings: url7
        }).then(res=>{
            console.log(res);
            localStorage.setItem("restaurant",JSON.stringify(res.data.updatedRestaurant))
            history.push("/");
        }).catch((e)=>{
            console.log(e.response);
        })
    }
    return (
        <div className="px-4 md:p-20 flex flex-col text-center gap-20 justify-center align-center" >
            <h1 className="text-2xl font-bold ">Let's add some more information about your restaurant</h1>
            <h3 className="text-xl font-semibold" >Enter 5 image URLs for your restaurant </h3>
            <div className="bg-red-500 flex flex-col items-center w-full h-max p-4 md:p-20 rounded-2xl gap-10" >
                <input className="p-3 w-full  rounded-xl" placeholder="add image url" type="text" value={url1} onChange={handleURL1} />
                <input className="p-3 w-full  rounded-xl"  placeholder="add image url"type="text" value={url2} onChange={handleURL2} />
                <input className="p-3 w-full  rounded-xl"  placeholder="add image url"type="text" value={url3} onChange={handleURL3} />
                <input className="p-3  w-full rounded-xl" placeholder="add image url" type="text" value={url4} onChange={handleURL4} />
                <input className="p-3 w-full  rounded-xl" placeholder="add image url" type="text" value={url5} onChange={handleURL5} />
                <input className="p-3 w-full  rounded-xl" placeholder="Minimum limit for each order " type="text" value={url6} onChange={handleURL6} />
                <input className="p-3 w-full  rounded-xl" placeholder="Enter timing of your restaurant" type="text" value={url7} onChange={handleURL7} />
                <button className="px-4 py-3 bg-white w-1/2" onClick={handleSave} >Save</button>
            </div>
        </div>
    )
}

export default Index
