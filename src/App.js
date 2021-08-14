import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';


function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState(''); 

  const handlerSetJobs = () => setTarefas([...tarefas, novaTarefa]);

  const deleteTarefa = (posicaoClick) => {
    const arrayTarefas = tarefas.filter((tarefa, posicao) => {
    return posicao !== posicaoClick
    }
    )
    setTarefas(arrayTarefas)
    console.log('Array deletado que vai se transformar em tarefas')
    console.log(arrayTarefas)
  }
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.charCode === 13) {
    handlerSetJobs();
  }
};

  return (
    <div className = "fora">
    <div className = "formulario">
      <h1>Tarefas</h1>
    <div className="input">
    <TextField
      label="Tarefa" 
      variant="outlined"
      onChange={e => setNovaTarefa(e.target.value)} 
      onKeyPress={handleKeypress}
    />
    </div>
      <div className = "enter">
    <Button 
      variant="contained" 
      color="primary"
      onClick={handlerSetJobs}>
      Enter
    </Button>
    </div>
    {/* {tarefas.map( tarefa => <li>{tarefa}</li>)} */}
    <div className="tab">
    <TableContainer className="tabela">
      <Table className="tarefa" size="medium" aria-label="a dense table">
        <TableHead className='topotab'>
          <TableRow >
            <TableCell><strong>Tarefas Diárias</strong></TableCell>
            <TableCell align="right"><strong>Excluir</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tarefas.map((tarefa,posicaoClick) => (
            <TableRow key={tarefa}>
              <TableCell component="th" scope="row">
                {tarefa}
              </TableCell>
              <TableCell align="right">    
              <button className="btndelete" onClick={() => deleteTarefa(posicaoClick)}>
                <DeleteIcon></DeleteIcon>
              </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </div>
  </div>
  );
}


export default App;