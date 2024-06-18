package com.cardatabase.cardatabase.domain;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class CarRepositoryTest {
	@Autowired
	CarRepository cRepository;

	@Test
	@DisplayName(value="create test")
	void putCar() {
//		Car car = new Car("Ford", "Mustang", "Red", "ADF-1121", 2021, 59000);
//		cRepository.save(car);
//		cRepository.save(new Car("Ford", "Mustang", "Red", "ADF-1121", 2021, 59000));
		
	}
	
	@Test
	@DisplayName(value="get cars test")
	void getCars() {
		for(Car car : cRepository.findAll()) {
			System.out.println(car);
		}
	}


}
