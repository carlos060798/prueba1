import { NextRequest, NextResponse } from 'next/server';
import Order from '@/database/models/order';
import connectBd from '@/database/conecction';
import models from "@/database/models/models";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectBd();

    try {
        const orderId = params.id;
        const order = await models.Order.findById(orderId)
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





export async function PUT(req: NextRequest , { params }: { params: { id: string } }) {
    await connectBd();

    try {
        
        const id = params.id;
        const data = await req.json();

        if (!id) {
            return NextResponse.json({ message: "ID de pedido no proporcionado" }, { status: 400 });
        }

        const updatedOrder = await Order.findByIdAndUpdate(id, data, { new: true });

        if (!updatedOrder) {
            return NextResponse.json({ message: "Pedido no encontrado" }, { status: 404 });
        }

        return NextResponse.json({ message: "Pedido actualizado", order: updatedOrder });
    } catch (error: any) {
        console.error("Error al actualizar pedido:", error);
        return NextResponse.json({ message: "Error al actualizar pedido" }, { status: 500 });
    }
}




export async function DELETE(req: NextRequest , { params }: { params: { id: string } }) {
    await connectBd();

    try {
        const id = params.id;

        if (!id) {
            return NextResponse.json({ message: "ID de pedido no proporcionado" }, { status: 400 });
        }

        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
            return NextResponse.json({ message: "Pedido no encontrado" }, { status: 404 });
        }

        return NextResponse.json({ message: "Pedido eliminado" });
    } catch (error: any) {
        console.error("Error al eliminar pedido:", error);
        return NextResponse.json({ message: "Error al eliminar pedido" }, { status: 500 });
    }
}