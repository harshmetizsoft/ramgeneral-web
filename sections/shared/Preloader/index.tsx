'use client'
import { useEffect, useState } from "react";

export default function Preloader({ id }: { id?: any } = {}) {
    const [isLoaded,setIsLoaded] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoaded(true);
        },1000)
    },[id])
    return(
        <div className={`preloader ${isLoaded?"loaded":""}`}>
          <div className="preloader-inner">
            <span className="loader"></span>
          </div>
        </div>
    )
}
