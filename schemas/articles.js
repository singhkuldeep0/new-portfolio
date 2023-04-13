import { defineType, defineField } from "sanity";

export const articles = defineType({
  name: "articles",
  type: "document",
  title: "Articles",
  fields: [
    defineField({
      name: "articleName",
      type: "string",
      title: " Name",
    }),
	
    defineField({
      name: "image",
      title:"Image",
      type: 'image',
      options: {
        hotspot: true 
      }   
    }),
	
    defineField({
      name: "videos",
      title:"Videos",
      type: "array",
      of: [{type:'file'}],
    }),

    defineField({
      name: "blogLink",
      type: "string",
      title: "BlogLink",
    }),
    defineField({
      name: "webLink",
      type: "string",
      title: "WebLink",
    }),
    defineField({
      name: "smallDescription",
      type: "string",
      title: "SmallDescription",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),

    defineField({
      name: "github",
      type: "string",
      title: "Github",
    })
  ]
})