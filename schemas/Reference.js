const Reference = {
  name: 'Reference',
  title: 'Reference',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the reference.',
      validation: Rule => Rule.required()
    },
    {
      name: 'detail',
      type: 'string',
      title: 'Detail',
      description: 'The detail of the reference.',
    },
  ]
}
export default Reference;