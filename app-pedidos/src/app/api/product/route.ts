import { NextResponse, NextRequest } from "next/server";
import connectBd from "@/database/conecction";
import Product from "@/database/models/Product";
import { Producto } from '../../../database/models/Product';

// Obtener todos los usuarios
export async function GET() {
    try {
        await connectBd();
        const products= await Product.find();
        return NextResponse.json(products);
    } catch (error: any) {
        console.error("Error al obtener los Productos:", error);
        return NextResponse.json({ message: "Error al obtener Productos" }, { status: 500 });
    }
}

// Crear un nuevo usuario
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