const Location = {
  name: 'Location',
  title: 'Location',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'city',
      type: 'string',
      title: 'City'
    },
    {
      name: 'state',
      type: 'string',
      title: 'State'
    },
    {
      name: 'year',
      type: 'date',
      title: 'Year',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'This Year'
      }
    },
    {
      name: 'details',
      type: 'array',
      of: [ {
        type: 'block'
      }]
    }
  ],
}
export default Location