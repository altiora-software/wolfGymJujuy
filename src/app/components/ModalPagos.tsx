"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { PlusCircle, X } from "lucide-react";

type Pago = {
  id: string;
  fechaPago: string;
  inicioMembresia: string;
  finMembresia: string;
};

type ModalPagosProps = {
  pagos: Pago[];
  onCrearPago: () => void;
};

export function ModalPagos({ pagos, onCrearPago }: ModalPagosProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
        Ver Pagos
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-[#1f1f1f] p-6 rounded-lg shadow-lg text-white">
          <Dialog.Title className="text-2xl font-bold mb-4">Pagos del Usuario</Dialog.Title>

          {/* Lista de pagos */}
          <div className="space-y-4">
            {pagos.map((pago) => (
              <div key={pago.id} className="bg-[#2a2a2a] p-4 rounded-md">
                <p><b>Fecha de Pago:</b> {pago.fechaPago}</p>
                <p><b>Inicio Membresía:</b> {pago.inicioMembresia}</p>
                <p><b>Fin Membresía:</b> {pago.finMembresia}</p>
              </div>
            ))}

            {pagos.length === 0 && <p className="text-gray-400">No hay pagos registrados.</p>}
          </div>

          {/* Botón para crear nuevo pago */}
          <button
            onClick={onCrearPago}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 py-2 rounded font-semibold"
          >
            <PlusCircle size={20} /> Crear Pago
          </button>

          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
