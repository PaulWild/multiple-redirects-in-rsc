import { NextResponse } from "next/server"

export const GET = () => {
    console.log('redirect called')

    return NextResponse.json({hello: 'there'})
}