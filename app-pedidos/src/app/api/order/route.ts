import { NextResponse, NextRequest } from "next/server";
import Order from "@/database/models/order";
import connectBd from "@/database/conecction";
import models from "@/database/models/models";
export async function GET(req: NextRequest) {
    await connectBd();

    try {
        
        const order = await models.Order.find()
            .populate('cliente', 'nombre correo celular direccion ciudad')
            .populate('productos', 'nombre valor inventario');

        if (!order) {
            return NextResponse.json({ message: "Pedido no encontrado" }, { status: 404 });
        }

        return NextResponse.json(order);
    } catch (error) {
        console.error("Error al obtener el pedido:", error);
        return NextResponse.json({ message: "Error al obtener el pedido", error: (error as Error).message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    await connectBd();

    try {
        const data = await req.json();
        const order = new Order(data);
        await order.save();

        return NextResponse.json({ message: "Pedido creado", order }, { status: 201 });
    } catch (error: any) {
        console.error("Error al crear pedido:", error);
        return NextResponse.json({ message: "Error al crear pedido" }, { status: 500 });
    }
} 

