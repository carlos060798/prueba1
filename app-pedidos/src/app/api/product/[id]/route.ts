import { NextResponse, NextRequest } from "next/server";
import Product from "@/database/models/Product";
import connectBd from "@/database/conecction";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectBd();
        const producto = await Product.findById(params.id);
        if (!producto) {
            return NextResponse.json({ message: "producto no encontrado" }, { status: 404 });
        }
        return NextResponse.json(producto);
    } catch (error) {
        console.error("Error al obtener producto:", error);
        return NextResponse.json({ message: "Error al obtener producto" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectBd();
        const producto = await Product.findOneAndDelete({ _id: params.id });
        if (!producto) {
            return NextResponse.json({ message: "producto no encontrado" }, { status: 404 });
        }
        return NextResponse.json({ message: "producto eliminado" });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        return NextResponse.json({ message: "Error al eliminar producto" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectBd();
        const data = await req.json();
        const producto = await Product.findByIdAndUpdate(params.id, data, { new: true });
        if (!producto) {
            return NextResponse.json({ message: "producto no encontrado" }, { status: 404 });
        }
        return NextResponse.json({ message: "producto actualizado", producto });
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        return NextResponse.json({ message: "Error al actualizar producto" }, { status: 500 });
    }
}