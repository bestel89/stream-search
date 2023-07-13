import { Form } from "react-bootstrap"

export default function ServiceSelectItem({service, serviceKey, index}) {

    console.log(service)

    const isFree = service.supportedStreamingTypes.free;



    return (
        <>
        <Form.Group className="my-5">
            <Form.Label>{serviceKey}</Form.Label>
            <Form.Check 
                type="checkbox" 
                label={serviceKey}
                name={serviceKey}
                disabled={isFree === true || isFree === undefined}
                defaultChecked={isFree === true || isFree === undefined ? true : false}
            />
        </Form.Group>
        </>
    )
}