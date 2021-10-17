import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Bio')
        .child(
          S.document()
            .schemaType('Bio')
            .documentId('Bio')
        ),
      // ...S.documentTypeListItems().filter(listItem => !['Bio'].includes(listItem.getId()))
      ...S.documentTypeListItems()
    ]
    )