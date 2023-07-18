import { Accordion, Badge, Col } from "react-bootstrap"

export default function DetailsStreamingServiceItem({item, index}) {
    const options = Object.values(item)[0]

    return (
        <>
            <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header key={index} className="text-capitalize">{Object.keys(item)[0]}</Accordion.Header>
                <Accordion.Body >
                {options.map((option, optionIndex) => (
                    <>
                        <div key={optionIndex} className="d-flex justify-content-between align-items-start">
                            <Col>
                                <Badge key={optionIndex}>
                                    {option.type}
                                </Badge>
                            </Col>
                            <Col>
                                <p className="text-uppercase">{option.quality}</p>
                            </Col>
                            <Col>
                                {option.price ? (
                                    <p className="flex-shrink-1">Price: £{option.price.amount}</p>
                                ) : (
                                    <p className="flex-shrink-1">Price: N/A</p>
                                )}
                            </Col>


                        </div>
                    </>
                ))}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}