import react from "react";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import Instagraming from "../components/Instagraming";

const Instagram = () => {
    return (
        <div className="max-w-[1240px] mx-auto text-center py-24">  
            <p className="text-2xl font-bold">Follow us in Instagram</p>
            <p className="pb-4">@captur</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
                <Instagraming socialImg={img1}/>
                <Instagraming socialImg={img2}/>
                <Instagraming socialImg={img3}/>
                <Instagraming socialImg={img4}/>
                <Instagraming socialImg={img5}/>

            </div>
        </div>
    )
}

export default Instagram