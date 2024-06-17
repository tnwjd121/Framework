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
	
	public List<TodoEntity> getTodos(){
		return tRepo.findAll();
	}
	
	
	
	
}
