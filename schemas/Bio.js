

const Bio =  {
  name: 'Bio',
  title: 'Bio',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'local',
      title: 'Local',
      type: 'string'
    },
    {
      name: 'details',
      title: 'Details',
      description: 'Place for your bio',
      type: 'array',
      of: [
        { type: 'block'}
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',

    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'address',
      type: 'address',
      title: 'Address',
    },
    {
      name: 'urls',
      title: 'URLs',
      type: 'array',
      of:[
        { type: 'link'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image'
    }
  }
}
export default Bio