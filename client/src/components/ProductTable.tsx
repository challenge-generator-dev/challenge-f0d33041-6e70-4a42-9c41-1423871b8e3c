// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useProducts } from '../hooks/useProducts';
import type { Product } from '../types/product.type';

interface ProductTableProps {
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
}

export function ProductTable({ onEdit, onDelete }: ProductTableProps) {
  throw new Error('TODO(reto): anonymous');
}

// TODO(reto): Implementar lógica de edición de productos
// TODO(reto): Implementar lógica de eliminación de productos
// TODO(reto): Conectar con el servicio API para persistencia