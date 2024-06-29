import { NextResponse, NextRequest } from "next/server";
import User from "@/database/models/User";
import connectBd from "@/database/conecction";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectBd();
        const usuario = await User.findById(params.id);
        if (!usuario) {
            return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
        }
        return NextResponse.json(usuario);
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        return NextResponse.json({ message: "Error al obtener usuario" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectBd();
        const usuario = await User.findOneAndDelete({ _id: params.id });
        if (!usuario) {
            return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
        }
        return NextResponse.json({ message: "Usuario eliminado" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        return NextResponse.json({ message: "Error al eliminar usuario" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectBd();
        const data = await req.json();
        const usuario = await User.findByIdAndUpdate(params.id, data, { new: true });
        if (!usuario) {
            return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
        }
        return NextResponse.json({ message: "Usuario actualizado", usuario });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        return NextResponse.json({ message: "Error al actualizar usuario" }, { status: 500 });
    }
}