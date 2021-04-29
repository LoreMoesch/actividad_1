import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



const data = [
  { id: 1, NombrePuesto: "Desarrollo", Empresa:"PilarTecno", Ciudad: "La Rioja", Pais: "Argentina" },
  
];

class App extends React.Component {
  state = {
    data: data,
    modalModificar: false,
    modalInsertar: false,
    form: {
      id: "",
      NombrePuesto: "",
      Empresa: "",
      Ciudad: "",
      Pais: "",
    },
  };

  mostrarModalModificar = (dato) => {
    this.setState({
      form: dato,
      modalModificar: true,
    });
  };

  cerrarmodalModificar = () => {
    this.setState({ modalModificar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.forEach((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].NombrePuesto = dato.NombrePuesto;
        arreglo[contador].Empresa = dato.Empresa;
        arreglo[contador].Ciudad = dato.Ciudad;
        arreglo[contador].Pais = dato.Pais;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalModificar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento ");
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.forEach((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalModificar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;

    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
 

  render() {
    
    return (
      <>
        <Container>
        <br />
        
          <br />
          <Table>
            <thead>
              <tr>
                {/* <th>Id</th> */}
                <th>NombrePuesto</th>
                <th>Empresa</th>
                <th>Ciudad</th>
                <th>Pais</th>
                <th>ACCION</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  {/* <td>{dato.id}</td> */}
                  <td>{dato.NombrePuesto}</td>
                  <td>{dato.Empresa}</td>
                  <td>{dato.Ciudad}</td>
                  <td>{dato.Pais}</td>
                  <td>
                    <Button color="primary" onClick={() => this.mostrarModalModificar(dato)}>Modificar</Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar</Button>
          <br />  
        </Container>

{/* ----------------------------------Menú de Editar Registro------------------------------- */}
        <Modal isOpen={this.state.modalModificar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            {/* <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup> */}
            
            <FormGroup>
              <label>
                NombrePuesto: 
              </label>
              <input
                className="form-control"
                name="NombrePuesto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NombrePuesto}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input
                className="form-control"
                name="Empresa"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Empresa}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input
                className="form-control"
                name="Ciudad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Ciudad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Pais: 
              </label>
              <input
                className="form-control"
                name="Pais"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Pais}
              />
            </FormGroup>
                      
          </ModalBody>

{/* ----------------------------------Botones de Editar Registro------------------------------- */}
          <ModalFooter>
            <Button
              color="warning"
              onClick={() => this.editar(this.state.form) }
            >
              Aceptar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarmodalModificar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

{/* ----------------------------------Menú de Insertar Registro------------------------------- */}

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h2>Insertar Registro</h2></div>
          </ModalHeader>

          <ModalBody>
{/*             <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup> */}
            
            <FormGroup>
              <label>
                NombrePuesto: 
              </label>
              <input
                className="form-control"
                name="NombrePuesto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input
                className="form-control"
                name="Empresa"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input
                className="form-control"
                name="Ciudad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Pais: 
              </label>
              <input
                className="form-control"
                name="Pais"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

{/* ----------------------------------Botones de Insertar Registro------------------------------- */}
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
