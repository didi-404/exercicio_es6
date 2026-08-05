const alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 6 },
  { nome: "Ana", nota: 9 },
  { nome: "Carlos", nota: 4 }
];

const filtrarAlunosAprovados = (listaDeAlunos) => {
  return listaDeAlunos.filter((aluno) => aluno.nota >= 6);
};

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);
