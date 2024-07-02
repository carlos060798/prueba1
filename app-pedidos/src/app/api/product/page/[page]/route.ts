import { NextResponse, NextRequest } from "next/server";
import connectBd from "@/database/conecction";
import Product from "@/database/models/Product";

// Obtener todos los usuarios

export async function GET(request: Request, { params }: { params: { page: string } }) {
    try {
        await connectBd(); // Conecta a la base de datos

        const page = Number(params.page) || 1; // Página actual (predeterminada: página 1)
        const limit = 10; // Límite de productos por página

        const skip = (page - 1) * limit; // Calcula el número de documentos a omitir

        const totalCount = await Product.countDocuments(); // Total de documentos en la colección

        const products = await Product.find().skip(skip).limit(limit); // Consulta los productos paginados

        return NextResponse.json({ products, totalCount, page });
    } catch (error: any) {
        console.error("Error al obtener los Productos:", error);
        return NextResponse.json({ message: "Error al obtener Productos" }, { status: 500 });
    }
}

