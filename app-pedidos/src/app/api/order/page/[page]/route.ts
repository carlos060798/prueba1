import { NextResponse,NextRequest} from "next/server";
import connectBd from "@/database/conecction";
import models from "@/database/models/models";

export async function GET(request: Request, { params }: { params: { page: string } }) {
    await connectBd();

    try {
        const page = Number(params.page) || 1; // Página actual (predeterminada: página 1)
        const limit = 10; // Límite de productos por página

        const skip = (page - 1) * limit; // Calcula el número de documentos a omitir

        const totalCount = await  models.Order.countDocuments(); // Total de documentos en la colección

        
        const order = await models.Order.find()
            .populate('cliente', 'nombre correo celular direccion ciudad')
            .populate('productos', 'nombre valor inventario').skip(skip).limit(limit); 

       

        return NextResponse.json({ order, totalCount, page });
    } catch (error) {
        console.error("Error al obtener el pedido:", error);
        return NextResponse.json({ message: "Error al obtener el pedido", error: (error as Error).message }, { status: 500 });
    }
}