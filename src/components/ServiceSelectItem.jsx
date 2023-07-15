import { Form } from "react-bootstrap";

export default function ServiceSelectItem({ service, handleChange, checked, supportedStreamingTypes }) {
  function handleSelectChange(evt) {
    const selectedValue = evt.target.checked;
    handleChange(service, selectedValue);
  }

  return (
    <Form.Group className="my-3 mx-3">
      <Form.Label>{service}</Form.Label>
      <Form.Check
        inline
        type="checkbox"
        name={service}
        onChange={handleSelectChange}
        checked={checked || supportedStreamingTypes.free}
        disabled={supportedStreamingTypes.free} // Disable the checkbox if free is true
      />
    </Form.Group>
  );
}