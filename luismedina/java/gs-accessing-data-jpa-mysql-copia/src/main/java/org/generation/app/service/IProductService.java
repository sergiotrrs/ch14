package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Product;

public interface IProductService {
	/**
	 * Enlista todos los productos de la base de datos
	 * @param Product 
	 * @return Listado de productos
	 */
	public List<Product> findAllProducts();
	/**
	 * Nos guarda el producto en la base de datos
	 * @param Product Datos del producto
	 * @return Devuelve el producto con el Id asignado
	 */ 
	public Product saveProduct(Product Product); 
	
	/**
	 * Elimina un producto de la base de datos
	 * @param Id identificador del producto a eliminar
	 */
	public Product deleteProductById(Long id);
	
	/**
	 * Encontrar un producto en la base de datos
	 * @param Id identificador del producto a buscar
	 * @return
	 */
	public Product findProductById(Long id);
	
	
}
