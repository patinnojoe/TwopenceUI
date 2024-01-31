import { frequentlyAskedQuestions } from "../data/faqData";
import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
const FrequentlyAskedQuestion = () => {
    return (
        <div className="faq-container">
            <h2 className="main-header text-center">Asked Questions</h2>

            <Accordion defaultActiveKey={1} className="accordion-container">
                {frequentlyAskedQuestions.map((data) => (
                    <FaqAccordion data={data} key={data.id} />
                ))}
            </Accordion>
        </div>
    );
};

export default FrequentlyAskedQuestion;

export function FaqAccordion({ data }) {
    return (
        <Accordion.Item eventKey={data.id} className="accordion-item">
            <Accordion.Header className="accordion-header fw-bold">
                {data.questionHeader}
            </Accordion.Header>
            <Accordion.Body className="accordion-body fnt-15">
                {data.questionAnswer}
            </Accordion.Body>
        </Accordion.Item>
    );
}
FaqAccordion.propTypes = {
    data: PropTypes.array,
};
