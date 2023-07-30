import { HeaderProps } from '@/lib/types'
import React from 'react'

export default function H1(props: HeaderProps) {
    const CLASSES = props.className !== undefined ? ` ${props.className}` : "";
    const ID = props.id ?? "";
    return <p className={`text-6xl H1${CLASSES}`} id={ID}>{props.children}</p>
}
