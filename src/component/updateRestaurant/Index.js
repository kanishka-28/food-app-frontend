import { useState } from "react"

const Index = () => {
    
    const [url1, seturl1] = useState("")
    const [url2, seturl2] = useState("")
    const [url3, seturl3] = useState("")
    const [url4, seturl4] = useState("")
    const [url5, seturl5] = useState("")
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
    
    return (
        <div className="p-20 flex flex-col text-center gap-20 justify-center align-center" >
            <h1 className="text-2xl font-bold ">Let's add some more information about your restaurant</h1>
            <h3 className="text-xl font-semibold" >Enter 5 image URLs for your restaurant </h3>
            <div className="bg-red-500 flex flex-col w-full h-max p-20 rounded-2xl gap-10" >
                <input className="p-3 rounded-xl" placeholder="add image url" type="text" value={url1} onChange={handleURL1} />
                <input className="p-3 rounded-xl"  placeholder="add image url"type="text" value={url2} onChange={handleURL2} />
                <input className="p-3 rounded-xl"  placeholder="add image url"type="text" value={url3} onChange={handleURL3} />
                <input className="p-3 rounded-xl" placeholder="add image url" type="text" value={url4} onChange={handleURL4} />
                <input className="p-3 rounded-xl" placeholder="add image url" type="text" value={url5} onChange={handleURL5} />

            </div>
        </div>
    )
}

export default Index
