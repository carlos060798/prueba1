import { NextResponse, NextRequest } from "next/server";
import connectBd from "@/database/conecction";
import Product from "@/database/models/Product";



// Crear un nuevo producto
export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        await connectBd();
        const producto = new Product(data);
        await producto.save();
        return NextResponse.json({ message: "Produto creado", producto }, { status: 201 });
    } catch (error: any) {
        console.error("Error al crear usuario:", error);
        return NextResponse.json({ message: "Error al crear Producto" }, { status: 500 });
    }
}