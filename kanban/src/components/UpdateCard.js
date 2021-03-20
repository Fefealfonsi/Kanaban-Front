import React from 'react';

function UpdateCard(props) {
  

  const { form, onChange, resetForm } = useForm({
    subtitle: "",
    content: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    updateCard(form, resetForm, props.id);
  };

  return (
    <CardContainer>
      <FormContainer onSubmit={handleSubmission}>
        <Title
          type="text"
          value={form.subtitle}
          name="subtitle"
          placeholder="Título"
          onChange={handleInputChange}
        />
        <Content
         
          value={form.content}
          name="content"
          placeholder="Conteúdo"
          onChange={handleInputChange}
        />

        <Button>Alterar </Button>
      </FormContainer>
    </CardContainer>
  );
}
export default UpdateCard;