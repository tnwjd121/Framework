package com.shop.entity;

import java.time.LocalDateTime;

import com.shop.constant.ItemSellStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

// 상품 엔티티 설계하기
// 엔티티(Entity)란 데이터베이스의 테이블에 대응하는 클래스라고 생각하면 됩니다.
// @Entity가 붙은 클래스는 JPA에서 관리하며 엔티티라고 합니다. 
// @Entity어노테이션을 클래스의 상단에 입력하면 JPA에 엔티티 클래스라는 것을 알려줍니다.
@Entity
// @Table 어노테이션을 통해 어떤 테이블과 매핑될지 지정합니다.
@Table(name="item")
@Getter
@Setter
@ToString
public class Item {
	// 상품코드
	// @Id 어노테이션을 이용하면 id멤버 변수를 상품 테이블의 기본키로 설정합니다.
	@Id
	// @GeneratedValue 어노테이션을 통한 기본키를 생성하는 전략(방법)
	// Auto - JPA 구현체가 자동으로 생성 잔략 결정
	// MySql 데이터베이스의 경우 auto_increment를 사용하여 기본키 생성
	@GeneratedValue(strategy=GenerationType.AUTO)
	// @Column 속성
	// 추가 속성 name - 필드와 매핑할 컬럼의 이름 설정, 기본값: 객체의 필드 이름
	@Column(name="item_id")
	private Long id;
	// 상품명
	@Column(nullable=false, length=50)
	// nullable - null값의 허용 여부 설정
	//length - String 타입의 문자 길이 제약조건 설정
	private String itemNm;
	// 가격
	@Column(name="price", nullable=false)
	private int price;
	// 재고 수량
	@Column(nullable=false)
	private int stockNumber;
	// 상품 상세 설명
	@Column(nullable=false)
	private String itemDetail;
	// 상품 판매 상태
	@Enumerated(EnumType.STRING)
	// enum타입을 엔티티 매핑에서 사용할 때 @Enumerated 어노테이션을 사용해야 한다
	// EnumType.ORIGINAL - enum 순서(숫자)값을 DB에 저장
	// EnumType.STRING - enum 이름 값을 DB에 저장
	private ItemSellStatus itemSellStatus;
	// 등록 시간
	private LocalDateTime regTime;
	// 수정 시간
	private LocalDateTime updateTime;

}
