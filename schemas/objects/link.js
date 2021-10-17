import { BiLinkAlt } from "react-icons/bi";

const link = {
  name: 'link',
  description: 'a way to add links',
  type: 'object',
  icon: BiLinkAlt,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'url'
    }
  }
}
export default link;