
import {
    Container,
    Title,
    NextButton,
    PreviewButton
} from './styles';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


export function NavigationWords({ skip, take, handlePrevious, handleNext }) {
    return (
        <Container>
            <PreviewButton onClick={handlePrevious}>
                <FaArrowLeft />
            </PreviewButton>
            {skip > 0 && <Title>Faixa de {skip + 1} - {take}</Title>}
            {skip == 0 && < Title > Faixa de {skip} - {take}</Title>}
            <NextButton onClick={handleNext}>
                <FaArrowRight />
            </NextButton>
        </Container >
    );
}