import { FaExternalLinkAlt } from 'react-icons/fa'
import { GoLink } from 'react-icons/go'
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'portableText'
 *  }
 */
const PortableText = {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      /**
       * Styles let you set what your user can mark up blocks with. These
       * corrensponds with HTML tags, but you can set any title or value
       * you want and decide how you want to deal with it where you want to
       * use your content.
       */
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        {title: 'Numbered', value: 'number'}
      ],
      /* Marks let you mark up inline text in the block editor. */
      marks: {
        /**
         * Decorators usually describe a single property – e.g. a typographic preference or highlighting by editors.
         * */
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            title: 'Internal Link',
            name: 'internal-link',
            type: 'link'
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'object',
            blockEditor: {
              icon: FaExternalLinkAlt
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({allowRelative: true, scheme: ['https', 'http', 'mailto', 'tel']})
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          },

        ]
      }
    },
    {
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
      ]
    }

  ]
}

export default PortableText;
