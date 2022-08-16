package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Product;
import org.generation.app.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImp implements IProductService {

	@Autowired
	IProductRepository productRepository;
	
	@Override
	public List<Product> findAllProducts() {		
		return (List<Product>) productRepository.findAll();
	}

	@Override
	public Product saveProduct(Product product) {		
		return productRepository.save(product);
	}

	@Override
	public Product deleteProductById(Long id) {
		Product product= findProductById(id);
		productRepository.deleteById(id);
		return product;
	}

	@Override
	public Product findProductById(Long id) {
		return productRepository.findById(id).orElse(null);
	}

}
