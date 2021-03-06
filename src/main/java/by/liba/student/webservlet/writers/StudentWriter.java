package by.liba.student.webservlet.writers;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import by.liba.student.common.Students;

public class StudentWriter {
	 private final String path;

		public StudentWriter(String path) {
			this.path = path;
		}
		public void writer(List<Students> students) throws IOException{
			try(BufferedWriter bw = new BufferedWriter(new FileWriter(path))){
				for (Students student : students){
					String line = String.format("%s;%s;%s", 
							student.getId(), 
							student.getFirstName(),
							student.getSecondName());
					bw.write(line);
					bw.newLine();
				}
			}
		}
}
