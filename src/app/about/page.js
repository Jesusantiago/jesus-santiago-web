'use client'

import { Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

export default function About () {

    const router = useRouter()

    return (
        <>
        <Typography color="primary">
            About 2
        </Typography>

        <Button color="primary" onClick={() => router.push("/")}> Ir a la raiz </Button>
        </>
    )
}