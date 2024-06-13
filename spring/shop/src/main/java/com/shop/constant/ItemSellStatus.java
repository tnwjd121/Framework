package com.shop.constant;

// 상품이 현재 판매 중인지 품절 상태인지를 나타내는 enum타입의 클래스입니다
// enum클래스를 사용하면 연관된 상수들을 모아둘 수 있으면  enum에 정의한 타입만 값을 가지도록 컴파일 시 체크를 할 수 있다는 장점이 있습니다.

public enum ItemSellStatus {
	SELL, SOLD_OUT
}
