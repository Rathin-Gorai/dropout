'use client'

import { onAuthStateChanged } from "firebase/auth";
import auth from "../../../firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";


const dashboard = () => {
    const router = useRouter();
    const check = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                return
            }
            else {
                toast.error("Sorry,Please login to access this page")
                router.push('login')
            }
        });
    }
    useEffect(() => {
        check();
    }, [])
    return (
        <div>dashboard</div>
    )
}

export default dashboard