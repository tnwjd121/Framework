package com.shop.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.shop.constant.ItemSellStatus;
import com.shop.entity.Item;

@SpringBootTest
// 통합 테스트를 위해 스프링 부트에서 제공하는 어노테이션입니다.
// 실제 애플리케이션을 구동할 때처럼 모든 Bean을 Ioc컨테이너에 등록합니다.
class ItemRepositoryTest {
	
	//@Autowired 어노테이션을 이용하여 Bean주입합니다.
	@Autowired
	ItemRepository itemRepository;

	@Test
	// 테스트할 메소드 위에 선언하여 해당 메소드를 테스트 대상으로 지정합니다.
	@DisplayName("상품 저장 테스트")
	//Junit5에 추가된 어노테이션으로 테스트 코드 실행 시
	// @DisplayName에 ㅣ정한 테스트명이 노출됩니다
	public void createItemTest() {
		Item item=new Item();
		item.setItemNm("테스트 상품");
		item.setPrice(10000);
		item.setItemDetail("테스트 상품 상세 설명");
		item.setItemSellStatus(ItemSellStatus.SELL);
		item.setStockNumber(100);
		item.setRegTime(LocalDateTime.now());
		item.setUpdateTime(LocalDateTime.now());
		System.out.println(item.toString());
		//JpaRepository에서 지원하는 메소드
		//save() - 엔티티 저장 및 수정
		Item savedItem=itemRepository.save(item);
		System.out.println(savedItem.toString());
	}
	@Test
	public void getItemsTest() {
		List<Item> itemList = itemRepository.findAll();
		for(Item item : itemList) {
			System.out.println(item);
		}
	}
	// 상품 10개 등록하기
//	@Test
	public void createItemList() {
		for(int i=1; i<=10; i++) {
			Item item=new Item();
			item.setItemNm("테스트 상품"+i);
			item.setPrice(10000+i);
			item.setItemDetail("테스트 상품 상세 설명"+i);
			item.setItemSellStatus(ItemSellStatus.SELL);
			item.setStockNumber(100);
			item.setRegTime(LocalDateTime.now());
			item.setUpdateTime(LocalDateTime.now());
			Item savedItem=itemRepository.save(item);
		}
	}
	
	@Test
	@DisplayName("상품명 조회 테스트")
	public void findByItemNmTest() {
		this.createItemList();
		List<Item> itemList = itemRepository.findByItemNm("테스트 상품1");
		System.out.println("-------------상품명 조회 테스트-----------");
		for(Item item : itemList) {
			System.out.println(item);
		}
	}
	

}
