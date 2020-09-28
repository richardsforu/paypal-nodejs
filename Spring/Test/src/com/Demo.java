
package com;

import java.util.Scanner;

public class Demo {

	// 1 read data from keyboard
	public static void io() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your Name: ");
		String name = sc.nextLine();
		System.out.println("Hello " + name);
	}
	

	// 2 do some computation work
	public static void compute() {
		System.out.println("---  my computation work...");
	}

	public static void main(String[] args) {
		//1. read IO
		Runnable ioTask=()->{
			io();
		};
		
		// 2.do BL
		Runnable computeTask=()->{
			compute();
		};
		
		Thread t1=new Thread(ioTask);
		Thread t2=new Thread(computeTask);
		
		//t1.start();
		//t2.start();
		
	
		
		
		
		
		

	}

}
