import { useState } from "react";
import { Container, DashedInput } from "@/common";
import { CalcButtons, Results } from "./components";

export const SampleCalculator = () => {
    const [qtdPoints, setQtdPoint] = useState("");
    const [qtdCareers, setQtdCareers] = useState("");
    const [sampleWidth, setSampleWidth] = useState("");
    const [sampleHeight, setSampleHeight] = useState("");
    const [sampleWeight, setSampleWeight] = useState("");
    const [wishedWidth, setWishedWidth] = useState("");
    const [wishedHeight, setWishedHeight] = useState("");

    return (
        <Container>
            <DashedInput placeholder="Quantidade de pontos" type="numeric" state={qtdPoints} setState={setQtdPoint} />

            <DashedInput
                placeholder="Quantidade de carreiras"
                type="numeric"
                state={qtdCareers}
                setState={setQtdCareers}
            />

            <DashedInput
                placeholder="Largura da amostra"
                type="numeric"
                state={sampleWidth}
                setState={setSampleWidth}
            />

            <DashedInput
                placeholder="Altura da amostra"
                type="numeric"
                state={sampleHeight}
                setState={setSampleHeight}
            />

            <DashedInput
                placeholder="Peso da amostra (opcional)"
                type="numeric"
                state={sampleWeight}
                setState={setSampleWeight}
            />

            <DashedInput placeholder="Largura desejada" type="numeric" state={wishedWidth} setState={setWishedWidth} />
            <DashedInput placeholder="Altura desejada" type="numeric" state={wishedHeight} setState={setWishedHeight} />

            <CalcButtons />
            <Results />
        </Container>
    );
};
