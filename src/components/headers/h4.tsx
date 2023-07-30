import { HeaderProps } from '@/lib/types'
import React from 'react'

export default function H4(props: HeaderProps) {
    const CLASSES = props.className !== undefined ? ` ${props.className}` : "";
    const ID = props.id ?? "";
    return <p className={`text-3xl H4${CLASSES}`} id={ID}>{props.children}</p>
}