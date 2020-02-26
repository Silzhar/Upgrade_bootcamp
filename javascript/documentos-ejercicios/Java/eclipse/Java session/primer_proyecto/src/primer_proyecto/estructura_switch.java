package primer_proyecto;

public class estructura_switch {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int mes, dias;
		mes = 3;
		
		switch (mes) {
		case 4:

		case 6:
		case 9:
		case 11:
			dias = 30;
			break;
		case 2:
			dias = 28;
			break;
		default:
			dias = 31;

		}
		System.out.println("En el mes "+mes);
		System.out.println("El mes elegido tiene " + dias + " días");
	}

}
