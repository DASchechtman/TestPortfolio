import { HeaderProps } from '@/lib/types'
import React from 'react'

export default function H6(props: HeaderProps) {
    const CLASSES = props.className !== undefined ? ` ${props.className}` : "";
    const ID = props.id ?? "";
    return <p className={`text-xl H6${CLASSES}`} id={ID}>{props.children}</p>
}