class Persona{
private $nombre;
private $apellido;
private $dni;
private $fecha_nacimiento;
private $sexo;

public function __construct($nombre,$apellido,$dni,$fecha_nacimiento,$sexo){
    this-> nombre=$nombre;
    this->apellido=$apellido;
    this->dni=$dni;
    this->fecha_nacimiento=$fecha_nacimiento;
    this->sexo=$sexo;
}

public function getNombre(){
    return this->nombre;
}

}