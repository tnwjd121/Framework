package com.cardatabase.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cardatabase.cardatabase.domain.Car;
import com.cardatabase.cardatabase.domain.CarRepository;

//@restController 어노테이션은 이 클래스가 Restful 웹 서비스의 컨트롤러가 되도록 지정한다.
@RestController
public class CarController {
	@Autowired
	private CarRepository carRepository;
	
	// 모든 자동 객체를 반환하며, 이는 Jackson라이브러리에 의해
	// JSON 객체로 변환된다.
	
	@GetMapping("/cars")
	public Iterable<Car> getCars() {
		return carRepository.findAll();
	}

}
