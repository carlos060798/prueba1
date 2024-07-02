

"use client";
import { useState, useEffect, useCallback } from 'react';
import { getproductsByPage, createproduct, deleteproduct, updateproduct } from '@/lib/apiclientProduct';
import IProduct from '@/interfaces/product';


const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchProducts = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const { products, totalCount } = await getproductsByPage(page);
      setProducts(products);
      setTotalCount(totalCount);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(page);
  }, [fetchProducts, page]);

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
      await fetchProducts(page); // Refetch products after creating
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdateProduct = async (id: string, updatedProduct: IProduct) => {
    try {
      const updatedProductData = await updateproduct(id, updatedProduct);
      setProducts(prevProducts => prevProducts.map(product => (product._id === id ? updatedProductData : product)));
      closeModal();
      await fetchProducts(page); // Refetch products after updating
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
      await fetchProducts(page); // Refetch products after deleting
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const selectProductForEdit = (product: IProduct) => {
    setSelectedProduct(product);
    openModal(true);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page * 10 < totalCount) setPage(page + 1);
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
    page,
    totalCount,
    handlePreviousPage,
    handleNextPage,
  };
};

export default useProducts;


















