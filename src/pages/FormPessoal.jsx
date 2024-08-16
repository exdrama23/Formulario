import * as C from "@chakra-ui/react"

const FormPessoal = () => {
  return (
    <C.VStack spacing={5}>
      <C.Heading color="#3498db" fontSize="24px">Formulário Pessoal</C.Heading>
      <C.Input type="email" placeholder="insira seu e-mail" />
      <C.Input type="text" placeholder="insira seu nome" />
      <C.Input type="text" placeholder="insira seu CPF" />
      <C.Input type="text" placeholder="insira seu telefone" />
      <C.RadioGroup defaultValue="masculino">
        <C.Stack direction="row">
          <C.Radio value="masculino">Masculino</C.Radio>
          <C.Radio value="feminino">Feminino</C.Radio>
        </C.Stack>
      </C.RadioGroup>
    </C.VStack>
  )
}

export default FormPessoal