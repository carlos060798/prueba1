

"use client"
import { useState, useEffect, useCallback } from 'react';
import { getproducts, createproduct, deleteproduct, updateproduct } from '@/lib/apiclientProduct';
import IProduct from '@/interfaces/product';

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const productsData = await getproducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const openModal = (editing: boolean = false) => {
    setIsModalOpen(true);
    setIsEditing(editing);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setIsEditing(false);
  };

  const handleCreateProduct = async (newProduct: IProduct) => {
    try {
      const createdProduct = await createproduct(newProduct);
      setProducts(prevProducts => [...prevProducts, createdProduct]);
      closeModal();
      await fetchProducts(); // Refetch products after creating
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdateProduct = async (id: string, updatedProduct: IProduct) => {
    try {
      const updatedProductData = await updateproduct(id, updatedProduct);
      setProducts(prevProducts => prevProducts.map(product => (product._id === id ? updatedProductData : product)));
      closeModal();
      await fetchProducts(); // Refetch products after updating
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteproduct(productId);
      setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
      if (selectedProduct && selectedProduct._id === productId) {
        closeModal();
      }
      await fetchProducts(); // Refetch products after deleting
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const selectProductForEdit = (product: IProduct) => {
    setSelectedProduct(product);
    openModal(true);
  };

  return {
    products,
    isModalOpen,
    openModal,
    closeModal,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    selectProductForEdit,
    selectedProduct,
    isEditing,
    isLoading,
  };
};

export default useProducts;
