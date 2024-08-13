'use client'

import { Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

export default function About () {

    const router = useRouter()

    return (
        <>
        <Typography color="primary" variant="h1">
            About 2 - h1
        </Typography>
        <Typography color="primary" variant="h2">
            About 2 - h2
        </Typography>
        <Typography color="primary" variant="h3">
            About 2 - h3
        </Typography>
        <Typography color="primary" variant="h4">
            About 2 - h4
        </Typography>
        <Typography color="primary" variant="h5">
            About 2 - h5
        </Typography>
        <Typography color="primary" variant="h6">
            About 2 - h6
        </Typography>
        <Typography color="primary" variant="body1">
            About 2 - body1
        </Typography>
        <Typography color="primary" variant="body2">
            About 2 - body2
        </Typography>
        <Typography color="primary" variant="button">
            About 2 - button
        </Typography>
        <Typography color="primary" variant="subtitle1">
            About 2 - subtitle1
        </Typography>
        <Typography color="primary" variant="subtitle2">
            About 2 - subtitle2
        </Typography>

        <Button color="primary" onClick={() => router.push("/")}> Ir a la raiz </Button>
        </>
    )
}