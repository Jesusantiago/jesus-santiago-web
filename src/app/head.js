import { metadata } from "./metadata";

export default function Head () {
    return (
        <>
            <title>{metadata.title}</title>
            <meta name="descripcion" content={metadata.description}/>
            <link rel="icon" href={metadata.favicon} />
        </>
    )
}