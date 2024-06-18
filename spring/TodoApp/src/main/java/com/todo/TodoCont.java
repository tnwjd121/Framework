package com.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TodoCont {
	
	@Autowired
	TodoService tService;
	
//	@GetMapping("/")
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String getTodos(Model model) {
//		for(TodoEntity tEntity:tService.getTodos()) {
//			System.out.println(tEntity);
//		}
		model.addAttribute("todos", tService.getTodos());
		return "todos";
	}
	// get 방식 요청: 주소창에 데이터가 노출 
	//  post 방식 요청 : 주소창에 데이터가 노출 안됨
	@PostMapping("/put")
//	requesetParam 생략 가능
	public String putTodo(TodoEntity tEntity) {
		if(tEntity.getCompleted()==null) {
			tEntity.setCompleted(false);
		}
		tService.putTodo(tEntity);
		return "redirect:/";
	}
	
	@GetMapping("/delete/{id}")
	public String deleteTodo(@PathVariable Integer id) {
		tService.deleteTodo(id);
		return "redirect:/";
	}
	@GetMapping("/update/{id}")
	public String updateTodo(@PathVariable Integer id, Model model) {
		// id값을 이용하여 한개의 todo 가져오기
		TodoEntity tEntity  = tService.getTodo(id);
		model.addAttribute("todo",tEntity);
		return "update-todo";
	}
	@GetMapping("/updateCompleted")
	public String updateCompleted(TodoEntity tEntity) {
		tEntity.setCompleted(!tEntity.getCompleted());
		tService.putTodo(tEntity);
		return "redirect:/";
	}

}
