import {defineConfig, defineField} from 'sanity'

export default defineConfig({
        title: "Testimonials",
        name: "testimonials",
        type: "document",
        fields: [
        defineField({
            title: "Image",
            name: "image",
            type: "string"
        }),
          defineField({
            title: "Name",
            name: "name",
            type: "string",
          }),
          defineField({
            title: "Description",
            name: "description",
            type: "string",
          })
        ]
      }  
)