import React from 'react'

type ContentCardProps = {
    title: string,
    photo: string,
    synopsis: string,
    type: "Film" | "Series" | "Program" | "Commercial Spot",
    duration: number,
    chapter?: number
}

export default function ContentCard({title, photo, synopsis, type, duration, chapter}: ContentCardProps) : JSX.Element {
    return (
        <div>
            {title}
        </div>
    );
}
