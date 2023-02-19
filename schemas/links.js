import {defineConfig, defineField} from 'sanity'

export default defineConfig({

        title: "Links",
        name: "links",
        type: "document",
        fields: [
        defineField({
            title: "Icon",
            name: "icon",
            type: "string"
        }),
          defineField({
            title: "Link",
            name: "link",
            type: "string",
          })
        ]
      }  
)