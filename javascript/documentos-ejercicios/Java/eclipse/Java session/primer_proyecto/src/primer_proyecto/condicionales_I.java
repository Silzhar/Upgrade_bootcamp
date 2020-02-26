package primer_proyecto;

public class condicionales_I {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String pass1, pass2, usuario;
		usuario = "ADALID";
		pass1 = "Daavid";
		pass2 = "david";
		byte correct = 0;

		if (pass1.equalsIgnoreCase(pass2) == true) {
			System.out.println("Contraseña correcta");
			correct = 1;
		} else {
			System.out.println("Contraseña incorrecta");
			correct = 0;
		}

		if ((usuario == "ADALID") && (correct == 1)) {
			System.out.println("Puedes entrar, adelante!!");
		} else
			System.out.println("No puedes entrar, comprueba tus datos");

	}

}
