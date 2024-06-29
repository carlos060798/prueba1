import { NextResponse, NextRequest } from "next/server";
import connectBd from "@/database/conecction";
import User from "@/database/models/User";

// Obtener todos los usuarios
export async function GET() {
    try {
        await connectBd();
        const usuarios = await User.find();
        return NextResponse.json(usuarios);
    } catch (error: any) {
        console.error("Error al obtener usuarios:", error);
        return NextResponse.json({ message: "Error al obtener usuarios" }, { status: 500 });
    }
}

// Crear un nuevo usuario
export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        await connectBd();
        const usuario = new User(data);
        await usuario.save();
        return NextResponse.json({ message: "Usuario creado", usuario }, { status: 201 });
    } catch (error: any) {
        console.error("Error al crear usuario:", error);
        return NextResponse.json({ message: "Error al crear usuario" }, { status: 500 });
    }
}