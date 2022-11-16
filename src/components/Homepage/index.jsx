import React from "react"
import { useState } from "react"
import api from "../../services/api"
import { Background, BoxResult, BoxValues, Container, Form } from "./styles"
import Spinner from 'react-bootstrap/Spinner';

const Homepage = () => {
    const [amount, setAmount] = useState(null)
    const [installment, setInstallment] = useState()
    const [mdr, setMdr] = useState(null)

    const [tomorrowValue, setTomorrowValue] = useState(0.00)
    const [fifteenValue, setFifteenValue] = useState(0.00)
    const [thirtyValue, setThirtyValue] = useState(0.00)
    const [ninetyValue, setNinetyValue] = useState(0.00)

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        data.preventDefault()
        setLoading(true)

        data = {
            "amount": amount,
            "installments": installment,
            "mdr": mdr
        }
        await api.post("", data)
            .then(response => {
                setTomorrowValue(response.data["1"])
                setFifteenValue(response.data["15"])
                setThirtyValue(response.data["30"])
                setNinetyValue(response.data["90"])
                setLoading(false)
            })
            .catch(response => {
                console.log(response.response.data)
                setLoading(false)
            })
    }

    return(
        <>
            <Background>
                <Container>
                    <BoxValues>
                        <Form>
                            <h1>Simule sua Antecipação</h1>
                            <div>
                                <label>Informe o valor da venda: *</label>
                                <input type="number" onChange={(e) => setAmount(e.target.value)} />
                            </div>

                            <div>
                                <label>Em quantas parcelas: *</label>
                                <input type="number" onChange={(e) => setInstallment(e.target.value)} />
                                <p>Máximo 12 parcelas</p>
                            </div>

                            <div>
                                <label>Informe o percentual de MDR: *</label>
                                <input type="number" onChange={(e) => setMdr(e.target.value)} />
                            </div>
                            <button onClick={onSubmit}>{loading ? <Spinner animation="border" size="sm" /> : "Calcular"}</button>
                        </Form>
                    </BoxValues>

                    <BoxResult>
                        <Form>
                            <div>
                                <h2>VOCÊ RECEBERÁ:</h2>
                                <hr />
                                <p>Amanhã: <label>{loading ? <Spinner animation="border" size="sm" /> : "R$ " + tomorrowValue.toFixed(2)} </label></p>
                                <p>Em 15 dias: <label>{loading ? <Spinner animation="border" size="sm" /> : "R$ " +  fifteenValue.toFixed(2)}</label></p>
                                <p>Em 30 dias: <label>{loading ? <Spinner animation="border" size="sm" /> : "R$ " +  thirtyValue.toFixed(2)}</label></p>
                                <p>Em 90 dias: <label>{loading ? <Spinner animation="border" size="sm" /> : "R$ " +  ninetyValue.toFixed(2)}</label></p>
                            </div>
                        </Form>
                    </BoxResult>
                </Container>
            </Background>
        </>
    )
}

export default Homepage