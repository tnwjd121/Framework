package com.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
public class TodoService {
	
	@Autowired
	TodoRepo tRepo;

//RequiredArgsConstructor를 하면 의존성 주입을 해줌 아래와 같은 결과
//	@Autowired
//	public TodoService(TodoRepo tRepo) {
//		super();
//		this.tRepo = tRepo;
//	}
	
	// db에 있는 전체 데이터 가져오기
	public List<TodoEntity> getTodos(){
		return tRepo.findAll();
	}
	
	// 사용자에게 입력 받은 데이터를 db에 저장
	public void putTodo(TodoEntity tEntity) {
		tRepo.save(tEntity);
	}
	
	// 받은 id 값으로 삭제하기
	public void deleteTodo(Integer id) {
		tRepo.deleteById(id);
	}
	
	
	
}
