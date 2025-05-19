import * as C from '@chakra-ui/react'
import { useState } from 'react'
import Step from './components/Step.jsx'
import FormPessoal from './pages/FormPessoal.jsx'
import FormEndereco from './pages/FormEndereço.jsx'
import FormProjeto from './pages/FormProjeto.jsx'


function App() {
  const [step, setStep] = useState(1)
  const Steps =[1,2,3]

  const getCompStep = () => {
    switch(step){
      case 1:
        return <FormPessoal/>
      case 2:
        return <FormEndereco/>
      case 3:
        return <FormProjeto/>
      default:
        return <FormPessoal/>
    }
  }

  return (
    <C.Flex h="100vh" align="center" justify="center">
      <C.Center maxW={500} w="100%" py={11} px={2} flexDirection="column" borderWidth="6px" borderColor="#333">

      <C.HStack spacing={4}>
      {Steps.map((item) => (
        <Step key={item} index={item} active={step===item}/>
        ))}
      </C.HStack>

      <C.Divider my={4} borderColor="blue.800"></C.Divider>

      <C.Box w="80%">{getCompStep()}</C.Box>
      
      <C.HStack spacing={10} mt={4}>

        <C.Button bg="gray.200"
        onClick={() => setStep(step-1)}
        disable={step===1}
        > Voltar
        </C.Button>

        <C.Button bg="green"
        onClick={() => step !==3 && setStep(step+1)}
        >
        {step===3 ? "Enviar":"Próximo"}
        </C.Button>

      </C.HStack>
      </C.Center>
    </C.Flex>
  )
}

export default App