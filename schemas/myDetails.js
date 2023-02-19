import { defineConfig, defineField } from 'sanity'

export default defineConfig({

    title: "MyDetails",
    name: "mydetails",
    type: "document",
    fields: [
        defineField({
            title: "Name",
            name: "name",
            type: "string"
        }),
        defineField({
            title: "Description",
            name: "description",
            type: "string"
        }),
        defineField({
            title: "ContactLinks",
            name: "contactLinks",
            type: "array",
            of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'links'},
                  ]
                }
              ]
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
    ]
}
)