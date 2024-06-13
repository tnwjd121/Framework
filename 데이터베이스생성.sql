-- 쿼리문을 작성 후 번개 모양 클릭 또는 ctrl+enter 키를 누르면
-- 쿼리가 실행된다 

-- 프로젝트에서 사용할 shop이라는 데이터베이스를 만든다.
-- 한글 데이터 저장을 위해
-- 기본 character set을 utf8로 설정해서 만들겠습니다.  

create database shop
default character set utf8
collate utf8_general_ci; 

-- 데이터베이스 생성한 것을 확인 한다
show databases; 

use shop;
show tables;

select * from item;

