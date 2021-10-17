import { BiFilm } from "react-icons/bi";

const Job = {
  name: 'Job',
  title: "Job",
  type:'document',
  icon: BiFilm,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Editor', value: 'editor'},
          { title: 'Assistant Editor', value: 'assistantEditor'}
        ]
      },
    },
    {
      name: 'isCurrent',
      title: 'Current',
      type: 'boolean',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY'
      },
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY'
      },
      hidden: ({ document }) => document?.isCurrent,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'portableText',
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'icon'
    }
  }
}
export default Job;