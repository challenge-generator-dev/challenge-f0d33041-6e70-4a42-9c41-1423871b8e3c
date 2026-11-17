import { useState, useEffect } from 'react';
import { Product, CreateProductDto, UpdateProductDto } from './types/product.type';
import { apiService } from './services/api.service';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.getProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreate = async (data: CreateProductDto) => {
    setLoading(true);
    setError(null);
    try {
      const newProduct = await apiService.createProduct(data);
      setProducts(prev => [...prev, newProduct]);
      setIsCreating(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear producto');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: string, data: UpdateProductDto) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await apiService.updateProduct(id, data);
      setProducts(prev => prev.map(p => p.id === id ? updated : p));
      setEditingProduct(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar producto');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await apiService.deleteProduct(id);
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar producto');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsCreating(false);
  };

  const handleDeleteClick = (id: string) => {
    if (window.confirm('¿Está seguro de eliminar este producto?')) {
      handleDelete(id);
    }
  };

  const handleFormSubmit = (data: CreateProductDto | UpdateProductDto) => {
    if (editingProduct) {
      handleUpdate(editingProduct.id, data);
    } else {
      handleCreate(data as CreateProductDto);
    }
  };

  const renderProductList = () => {
    if (loading && products.length === 0) {
      return <p>Cargando productos...</p>;
    }

    if (products.length === 0) {
      return (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <p style={{ color: '#666', fontSize: '16px' }}>
            No hay productos disponibles. Haga clic en "Nuevo Producto" para comenzar.
          </p>
        </div>
      );
    }

    return (
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginTop: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Nombre</th>
            <th style={{ padding: '12px', textAlign: 'right' }}>Precio</th>
            <th style={{ padding: '12px', textAlign: 'center' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr 
              key={product.id} 
              style={{ 
                backgroundColor: index % 2 === 0 ? '#fff' : '#f5f5f5',
                borderBottom: '1px solid #eee'
              }}
            >
              <td style={{ padding: '12px' }}>{product.id}</td>
              <td style={{ padding: '12px' }}>{product.name}</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>
                ${product.price.toFixed(2)}
              </td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <button
                  onClick={() => handleEdit(product)}
                  disabled={loading}
                  style={{
                    padding: '6px 12px',
                    marginRight: '8px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.6 : 1
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteClick(product.id)}
                  disabled={loading}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.6 : 1
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px' }}>
        Gestión de Productos
      </h1>
      
      {error && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#ffebee', 
          border: '1px solid #ef5350',
          marginBottom: '20px',
          borderRadius: '4px',
          color: '#c62828'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => { setIsCreating(true); setEditingProduct(null); }}
          disabled={loading || isCreating}
          style={{
            padding: '12px 24px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          + Nuevo Producto
        </button>
        <button 
          onClick={loadProducts}
          disabled={loading}
          style={{
            padding: '12px 24px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            fontSize: '14px'
          }}
        >
          {loading ? 'Cargando...' : 'Recargar'}
        </button>
      </div>

      {(isCreating || editingProduct) && (
        <div style={{
          padding: '24px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginBottom: '24px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ marginTop: 0, color: '#333' }}>
            {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
          </h3>
          <ProductForm
            product={editingProduct}
            onSubmit={handleFormSubmit}
            onCancel={() => { setIsCreating(false); setEditingProduct(null); }}
            loading={loading}
          />
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        {renderProductList()}
      </div>

      {loading && products.length > 0 && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#2196F3',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          Procesando...
        </div>
      )}
    </div>
  );
}

interface ProductFormProps {
  product?: Product | null;
  onSubmit: (data: CreateProductDto | UpdateProductDto) => void;
  onCancel: () => void;
  loading: boolean;
}

function ProductForm({ product, onSubmit, onCancel, loading }: ProductFormProps) {
  const [name, setName] = useState(product?.name || '');
  const [price, setPrice] = useState(product?.price?.toString() || '');
  const [nameError, setNameError] = useState('');

  const validateName = (value: string) => {
    if (!value.trim()) {
      setNameError('El nombre es requerido');
      return false;
    }
    if (value.trim().length < 2) {
      setNameError('El nombre debe tener al menos 2 caracteres');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    if (!validateName(trimmedName)) {
      return;
    }

    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue < 0) {
      return;
    }

    const data: CreateProductDto | UpdateProductDto = {
      name: trimmedName,
      price: priceValue
    };
    
    onSubmit(data);
  };

  const isValid = name.trim().length >= 2 && price && !isNaN(parseFloat(price)) && parseFloat(price) >= 0;

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '200px' }}>
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#333' }}>
          Nombre del Producto
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); validateName(e.target.value); }}
          required
          minLength={2}
          style={{ 
            padding: '10px', 
            borderRadius: '4px', 
            border: nameError ? '2px solid #f44336' : '1px solid #ccc', 
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '14px'
          }}
          placeholder="Ingrese el nombre del producto"
        />
        {nameError && (
          <span style={{ color: '#f44336', fontSize: '12px', marginTop: '4px', display: 'block' }}>
            {nameError}
          </span>
        )}
      </div>
      <div style={{ flex: '0 0 150px' }}>
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#333' }}>
          Precio ($)
        </label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ 
            padding: '10px', 
            borderRadius: '4px', 
            border: '1px solid #ccc', 
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '14px'
          }}
          placeholder="0.00"
        />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          type="submit"
          disabled={loading || !isValid}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: (loading || !isValid) ? 'not-allowed' : 'pointer',
            opacity: (loading || !isValid) ? 0.6 : 1,
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Guardando...' : (product ? 'Actualizar' : 'Crear')}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#9e9e9e',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            fontSize: '14px'
          }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}