import connect from '@/dbconfig/connect';
import { NextResponse } from 'next/server';
import Contact from '@/models/contact';
connect();
export async function POST(req) {
    try {
        const body = await req.json();
        const user = await Contact.create(body);
        return NextResponse.json( {
            message:"user addes sucessfully"
        });
    } catch (error) {
        return NextResponse.json( {
            message:"Data not loaded! "
        });
    }
}
export async function GET(req) {
    try {
        //  body = await req.json();
        const user = await Contact.find();
        return NextResponse.json( {
            user
        });
    } catch (error) {
        return NextResponse.json( {
            message:"Data not loaded! "
        });
    }
}
