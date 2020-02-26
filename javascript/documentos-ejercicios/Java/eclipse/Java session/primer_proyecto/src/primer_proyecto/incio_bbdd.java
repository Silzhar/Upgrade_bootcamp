package primer_proyecto;

import java.util.*;

public class incio_bbdd {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//@SuppressWarnings("resource")
		Scanner teclado = new Scanner(System.in);
		int numAlumnos, i;
		double suma = 0, media;

		do {
			System.out.print("Número de alumnos de la clase: ");
			numAlumnos = teclado.nextInt();
		} while (numAlumnos <= 0);

		double[] notas = new double[numAlumnos];
		for (i = 0; i < notas.length; i++) {
			System.out.print("Alumno " + (i + 1) + " Nota final:");
			notas[i] = teclado.nextDouble();
		}
		for(i=0;i<notas.length;i++) {
			suma=suma + notas[i];
			media= suma /notas.length;
			System.out.printf("Nota media del curso:%.2f%n",media);
			System.out.println("Listado de notas superiores a la media:");
			for(i=0;i<notas.length;i++) {
				if(notas[i]>media)
					System.out.println("Alumno nuevo "+ (i+1)+" Nota final: "+ notas[i]);
			}
		}
	}

}
