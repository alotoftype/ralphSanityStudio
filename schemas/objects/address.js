const address = {
  name: 'address',
  type: 'object',
  title: 'Address',
  fields: [
    {
      name: 'street',
      type: 'string',
      title: 'Street',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
    },
    {
      name: 'zip',
      type: 'number',
      title: 'Zip',
    }
  ]
}
export default address;