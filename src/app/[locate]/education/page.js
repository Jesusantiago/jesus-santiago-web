'use client'

import Box from "@mui/material/Box"
import {useRouter} from "next/navigation"

export default function Education() {
    const router = useRouter()
    return (
        <Box>
            <h1>Education</h1>
            <button onClick={() => router.push("/")}> Ir a la raiz </button>
        </Box>
    )
}