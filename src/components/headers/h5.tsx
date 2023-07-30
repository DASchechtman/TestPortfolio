import { HeaderProps } from '@/lib/types'
import React from 'react'

export default function H5(props: HeaderProps) {
    const CLASSES = props.className !== undefined ? ` ${props.className}` : "";
    const ID = props.id ?? "";
    return <p className={`text-2xl H5${CLASSES}`} id={ID}>{props.children}</p>
}