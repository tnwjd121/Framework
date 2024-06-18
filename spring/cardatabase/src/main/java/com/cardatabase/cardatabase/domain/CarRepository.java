package com.cardatabase.cardatabase.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository  extends JpaRepository<Car, Long>{
	// 첫번째 dto 이름, 두번째 id 타입
	// 브랜드로 자동차를 검색
	List<Car> findByBrand(String brand);
	

}
