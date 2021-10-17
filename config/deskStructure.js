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
            //.documentId('Bio')
            .documentId('a1db5ad4-934c-4188-b7c5-b38d1b217819')
        ),
      ...S.documentTypeListItems().filter(listItem => !['Bio'].includes(listItem.getId()))
    ]
    )