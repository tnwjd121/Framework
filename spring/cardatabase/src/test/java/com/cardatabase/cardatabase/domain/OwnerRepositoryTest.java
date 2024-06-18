package com.cardatabase.cardatabase.domain;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
//system.out.println은 리소르를 많이 사용하여
// 실제 코드에 로그를 출력할려면 로거 라이브러리를 사용한다
// 로길 수준에는 trace, debug, info, warn, error, fatal, off 7가지가 있다.
//@Slf4j
class OwnerRepositoryTest {
	
	@Autowired
	OwnerRepository ownerRepository;
	@Autowired
	CarRepository carRepository;

	@Test
	void putOwner() {
		// 소유자가 객체를 추가하고 데이터베이스에 저장
		Owner owner1 = new Owner();
		owner1.setFirstname("John");
		owner1.setLastname("Johnson");
		Owner owner2 = new Owner();
		owner2.setFirstname("Mary");
		owner2.setLastname("Robinson");
		// 여러 엔티티를 저장하는 saveAll 메소드
		ownerRepository.saveAll(Arrays.asList(owner1, owner2));
		// 자동차 객체를 추가하고 소유자와 연결한 후 데이터 베이스에 저장
		Car car1 = new Car("Ford", "Mustang", "Red", "ADF-1121", 2021, 59000, owner1);
		Car car2 = new Car("Nissan", "Leaf", "white", "SSJ-3002", 2019, 29000, owner2);
		Car car3 = new Car("Toyota", "Prius", "Silver", "KKO-0212", 2020, 39000, owner2);
		carRepository.saveAll(Arrays.asList(car1, car2, car3));
		
		for(Car car : carRepository.findAll()) {
			System.out.println(car);
		}
	}

}
